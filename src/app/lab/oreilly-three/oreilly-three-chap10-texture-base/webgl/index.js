import * as THREE from 'three';
import * as SceneUtils from 'three/addons/utils/SceneUtils.js';

import * as dat from 'dat.gui';
// https://github.com/dataarts/dat.gui
import * as Stats from 'stats.js';
// https://github.com/mrdoob/stats.js

let plane, INTERSECTED, spotLight;
const panels = new THREE.Group();
const targetDegreePanels = 1 / 11.5 * Math.PI;
const loadItems = [
  '/lab/oreilly-three/images/samples/dishes/beef_001.jpg',
  '/lab/oreilly-three/images/samples/dishes/fish_001.jpg',
  '/lab/oreilly-three/images/samples/dishes/beef_002.jpg',
  '/lab/oreilly-three/images/samples/dishes/fish_002.jpg',
  '/lab/oreilly-three/images/samples/dishes/caprese_001.jpg',
  // '/lab/oreilly-three/images/samples/dishes/cheese_001.jpg',
  // '/lab/oreilly-three/images/samples/dishes/pasta_001.jpg'
]
let loadedCounter = 0;
let initExecute = false;
let firstRotationPanels = true;
const textures = {};
const texturePanels = [];
const clock = new THREE.Clock();

const prevButton = document.querySelector('#changer .prev');
const nextButton = document.querySelector('#changer .next');

const throwAnimationLoop = {
  panelMouseOver: function (INTERSECTED, targetValue) {
    target.parent.position.y += (targetValue - target.parent.position.y) * 0.02
  }
}

const animations = {
  panelMouseOver: {
    animate: function (INTERSECTED, targetValue) {
      const target = INTERSECTED;
      function play() {
        target.parent.position.y += (targetValue - target.parent.position.y) * 0.02
        requestAnimationFrame(play);
      }
      play();
    },
    on: function () {
      INTERSECTED.material.opacity = 0;
      const targetValue = INTERSECTED.parent.position.y + 6;
      this.animate(INTERSECTED, targetValue);
    },
    off: function () {
      INTERSECTED.material.opacity = 0.3;
      const targetValue = INTERSECTED.parent.position.y - 6;
      this.animate(INTERSECTED, targetValue);
    }
  },
  panelChanger: {
    animate: function (target) {
      function play() {
        panels.rotation.y += (target - panels.rotation.y) * 0.1;
        requestAnimationFrame(play);
      }
      play();
    },
    prev: function () {
      firstRotationPanels = false;
      const target = panels.rotation.y - (200 / Object.keys(textures).length) * (Math.PI / 180);
      if (!(panels.rotation.y <= targetDegreePanels + 0.3)) {
        // this.animate(target);
        panels.rotation.y -= (200 / Object.keys(textures).length) * (Math.PI / 180);
      }
    },
    next: function () {
      firstRotationPanels = false;
      const limitMax = targetDegreePanels + ((200 / Object.keys(textures).length) * (Math.PI / 180)) * Object.keys(textures).length - 1;
      const target = panels.rotation.y + (200 / Object.keys(textures).length) * (Math.PI / 180);
      // console.log(target, panels.rotation.y)
      if (!(panels.rotation.y > limitMax - 0.3)) {
        // this.animate(target);
        panels.rotation.y = panels.rotation.y + (200 / Object.keys(textures).length) * (Math.PI / 180);
      }
    }
  }
}

function loadComplete() {
  const textureLoader = new THREE.TextureLoader();
  loadItems.forEach(item => {
    textureLoader.load(item, function (texture) {
      const path = item.split('/');
      const key = path[path.length - 1].split('.')[0];
      loadedCounter++;
      textures[key] = texture;
    });
  })
}
loadComplete();

function onCLickAudio() {
  initExecute = true;
  const allWraper = document.createElement('div');
  allWraper.innerText = "Click Me.";
  allWraper.id = "#audio";
  const styles = {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "#000000",
    zIndex: 9999,
    color: "#FFFFFF",
    transition: "1s",
    textAlign: "center",
    fontSize: "1.3rem",
    textShadow: "0 0 10px #FFFFFF",
    letterSpacing: "0.4rem",
    lineHeight: "1.5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  }
  Object.keys(styles).forEach(key => {
    allWraper.style[key] = styles[key];
  });
  document.querySelector('body').appendChild(allWraper);
  allWraper.addEventListener('click', () => {
    allWraper.style.opacity = 0;
    setTimeout(() => {
      allWraper.style.display = "none";
    }, 1000);
    const music = new Audio('/lab/oreilly-three/audio/LOOP11.mp3');
    music.loop = true;
    music.volume = 0.5;
    music.play();
    setTimeout(() => {
      init();
    }, 0);
  });
}

function judgeLoaded() {
  // console.log('judgeNow');
  if (loadedCounter === loadItems.length && !initExecute) {
    console.log('completed');
    onCLickAudio();
  } else {
    // console.log('unCompeleted');
  }
  if (!initExecute) {
    requestAnimationFrame(judgeLoaded);
  }
}
judgeLoaded();

export default function Canvas() {

  // ========================================
  // Definition
  // ========================================

  const myCanvas = document.querySelector('#canvas');
  const renderer = new THREE.WebGLRenderer({ canvas: myCanvas });
  renderer.shadowMap.enabled = true;
  renderer.setClearColor(0x000000);
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Scene
  // -----------------------------------------
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x000000, 10, 380)
  const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight);
  camera.position.set(-269, 119, 125);
  camera.lookAt(-80, 20, 0);

  // Event
  // -----------------------------------------

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  function onMouseMove(event) {
    mouse.x = (event.clientX / innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / innerHeight) * 2 + 1;
  }

  function onResize() {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  }

  prevButton.addEventListener('click', () => {
    animations.panelChanger.prev();
  });
  nextButton.addEventListener('click', () => {
    animations.panelChanger.next();
  });

  // Raycaster
  // -----------------------------------------
  function intersectsRaycaster() {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(texturePanels);
    if (intersects.length > 0) {
      if (INTERSECTED != intersects[0].object) {
        if (INTERSECTED) animations.panelMouseOver.off(INTERSECTED);
        INTERSECTED = intersects[0].object;
        if (INTERSECTED) animations.panelMouseOver.on(INTERSECTED);
      }
    } else {
      if (INTERSECTED) animations.panelMouseOver.off(INTERSECTED);
      INTERSECTED = null;
    }
  }

  // Stats.js
  // -----------------------------------------
  function initStats() {
    const stats = new Stats();
    stats.setMode(0);
    const styles = { position: 'absolute', top: 0, left: 0, right: 'unset' };
    Object.keys(styles).forEach(key => {
      stats.domElement.style[key] = styles[key];
    });
    document.querySelector('#stats').appendChild(stats.domElement);
    return stats;
  }
  const stats = initStats();

  // dat.gui
  // ----------------------------------------
  const controls = new function () {
    this.camera = {
      x: 0,
      y: 50,
      z: 300,
      lookAt: false
    },
      this.spotLight = {
        x: 0,
        y: 278,
        z: 208,
        lookX: 0,
        lookY: 0,
        lookZ: 0,
        lookAt: false,
        angle: 3,
        intensity: 1,
        decay: 1,
        distance: 100,
        penumbra: 0.4
      }
  };
  const gui = new dat.GUI();
  gui.close();
  const guis = {};
  // guis.camera = gui.addFolder('camera');
  // guis.camera.open();
  // guis.camera.add(controls.camera, 'x', 0, 500);
  // guis.camera.add(controls.camera, 'y', 0, 500);
  // guis.camera.add(controls.camera, 'z', 30, 500);
  // guis.camera.add(controls.camera, 'lookAt');
  guis.spotLight = gui.addFolder('spotLight');
  guis.spotLight.open();
  guis.spotLight.add(controls.spotLight, 'x', 0, 500);
  guis.spotLight.add(controls.spotLight, 'y', 0, 500);
  guis.spotLight.add(controls.spotLight, 'z', 30, 500);
  guis.spotLight.add(controls.spotLight, 'lookX', 0, 2 * Math.PI);
  guis.spotLight.add(controls.spotLight, 'lookY', 0, 2 * Math.PI);
  guis.spotLight.add(controls.spotLight, 'lookZ', 0, 2 * Math.PI);
  guis.spotLight.add(controls.spotLight, 'lookAt');
  guis.spotLight.add(controls.spotLight, 'angle', 0, Math.PI * 2).onChange(function (e) {
    spotLight.angle = e;
  });
  guis.spotLight.add(controls.spotLight, 'intensity', 0, 5).onChange(function (e) {
    spotLight.intensity = e;
  });
  guis.spotLight.add(controls.spotLight, 'decay', 1, 100).onChange(function (e) {
    spotLight.decay = e;
  });
  guis.spotLight.add(controls.spotLight, 'distance', 0, 200).onChange(function (e) {
    spotLight.distance = e;
  });
  guis.spotLight.add(controls.spotLight, 'penumbra', 0, 1).onChange(function (e) {
    spotLight.penumbra = e;
  });

  // ========================================
  // Create
  // ========================================

  // Texture
  // ----------------------------------------

  function createTexture(texture, position, degree) {
    const panel = new THREE.Group();

    const parameters = { width: 126, height: 94.5 };
    const radius = 30;
    const matTexture = new THREE.MeshBasicMaterial({
      color: 0xFFFFFF,
      map: textures[texture]
    });
    const matBackSide = new THREE.MeshBasicMaterial({
      color: 0x333333,
      side: THREE.DoubleSide
    });
    const matCoverImage = new THREE.MeshPhongMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.3
    });
    const geom = new THREE.PlaneGeometry(parameters.width, parameters.height);
    const original = SceneUtils.createMultiMaterialObject(geom, [matTexture, matBackSide, matCoverImage]);

    original.children[1].position.z = -0.1;
    original.children[2].position.z = 0.1;

    texturePanels.push(original.children[2]);

    const mirror = new THREE.Mesh(
      geom,
      new THREE.MeshBasicMaterial({
        color: 0xFFFFFF,
        map: textures[texture],
        side: THREE.DoubleSide
      })
    );
    mirror.position.y = -parameters.height - 8;
    mirror.rotation.x = Math.PI;

    panel.add(original);
    panel.add(mirror);

    panel.position.set(
      (radius + parameters.width) * Math.cos(position * (Math.PI / 180)),
      parameters.height / 2,
      (radius + parameters.width) * Math.sin(position * (Math.PI / 180))
    );
    panel.rotation.y = Math.PI - (degree * (Math.PI / 180));

    panels.add(panel);
  }
  Object.keys(textures).forEach((texture, i, ary) => {
    const position = (-200 / ary.length) * i;
    const degree = (-200 / ary.length) * i;
    createTexture(texture, position, degree);
  });
  console.log(scene);
  scene.add(panels);
  console.log(panels);
  panels.rotation.y = Math.PI;

  // Light
  // ----------------------------------------

  const ambientLight = new THREE.AmbientLight(0xFFFFFF);
  spotLight = new THREE.SpotLight(0xFFFFFF, 0.7);
  spotLight.castShadow = true;
  const spotLightHelper = new THREE.CameraHelper(spotLight.shadow.camera);
  // spotLight.lookAt(0,0,0);

  // Helper
  // ----------------------------------------

  function createPlane() {
    const matWireframe = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, wireframe: true });
    const matBase = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide, transparent: true, opacity: 0.5 });
    const geom = new THREE.PlaneGeometry(500, 500, 50, 50);
    plane = SceneUtils.createMultiMaterialObject(geom, [matWireframe, matBase]);
    plane.children[0].position.z = 1;
    plane.rotation.x = - (1 / 2 * Math.PI);
    return plane;
  }

  function createArrowHelper() {
    const arrowHelper = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 0), 100, 0x0000ff);
    console.log(arrowHelper);
    return arrowHelper;
  }

  plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1000, 1000),
    new THREE.MeshBasicMaterial(
      { color: 0xffffff, opacity: 0.9, transparent: true }
    )
  )
  plane.rotation.x = -Math.PI / 2;
  plane.position.y = -4;

  scene.add(
    // createArrowHelper(),
    // createPlane(),
    // spotLightHelper,
    spotLight,
    ambientLight,
    plane
  )

  // ========================================
  // Animation
  // ========================================

  let rotate = 0;
  function cameraMover() {
    const targetPosX = (mouse.x * 15) + camera.position.x;
    camera.position.x += (targetPosX - camera.position.x) * 0.001;
    const targetPosY = (mouse.y * 15) + camera.position.y;
    camera.position.y += (targetPosY - camera.position.y) * 0.001;
  }
  const limitMax = {
    cameraPosX: camera.position.x + 15,
    cameraPosY: camera.position.y + 15
  }
  const limitMin = {
    cameraPosX: camera.position.x - 15,
    cameraPosY: camera.position.y - 15
  }

  function rendererScene() {
    if (rotate === 0) {
      spotLight.penumbra = spotLight.penumbra + 0.09;
    }
    // update
    // ------------------------------------------
    stats.update();
    onResize();
    rotate += 0.02;
    const delta = clock.getDelta();

    // Panels
    // ------------------------------------------
    if (firstRotationPanels) {
      panels.rotation.y += (targetDegreePanels - panels.rotation.y) * 0.05;
    }

    // gui - spotLight
    // ------------------------------------------
    spotLight.position.set(
      controls.spotLight.x, controls.spotLight.y, controls.spotLight.z
    )
    spotLight.rotateX(controls.spotLight.lookX);
    spotLight.rotateY(controls.spotLight.lookY);
    spotLight.rotateZ(controls.spotLight.lookZ);
    if (controls.spotLight.lookAt) {
      console.log('he')
      spotLight.lookAt(0, 0, 0);
    }

    // camera
    // ------------------------------------------
    if (limitMax.cameraPosX <= camera.position.x) {
      if (!(mouse.x > 0)) {
        cameraMover();
      }
    } else if (limitMax.cameraPosY <= camera.position.y) {
      if (!(mouse.y > 0)) {
        cameraMover();
      }
    } else if (limitMin.cameraPosX >= camera.position.x) {
      if (!(mouse.x < 0)) {
        cameraMover();
      }
    } else if (limitMin.cameraPosY >= camera.position.y) {
      if (!(mouse.y < 0)) {
        cameraMover();
      }
    } else {
      cameraMover();
    }

    intersectsRaycaster();
    requestAnimationFrame(rendererScene);
    renderer.render(scene, camera);
  }
  document.addEventListener('mousemove', onMouseMove, false);
  rendererScene();
}
