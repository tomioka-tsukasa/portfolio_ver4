// ========================================
//  npm run build
// ========================================

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';;

import * as dat from '../../../../common/libs/ui/dat.gui';
// https://github.com/dataarts/dat.gui
import { Stats } from '../../../../common/libs/ui/stats';
// https://github.com/mrdoob/stats.js

// // ========================================
// //  npm run dev
// // ========================================

// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';;

// import * as dat from 'dat.gui';
// // https://github.com/dataarts/dat.gui
// import * as Stats from 'stats.js';
// // https://github.com/mrdoob/stats.js


function init() {

  // ========================================
  // Definition
  // ========================================

  // Scene
  // ----------------------------------------
  const myCanvas = document.querySelector('#canvas');
  const renderer = new THREE.WebGLRenderer({
    canvas: myCanvas
  });
  renderer.setSize(innerWidth, innerHeight);
  renderer.setClearColor(new THREE.Color(0x000000));
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xFFFFFF, 50, 200);

  const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight);
  camera.position.set(30, 50, 70);
  const orbitControls = new OrbitControls(camera, myCanvas);
  orbitControls.autoRotate = false;
  orbitControls.autoRotateSpeed = 4.0;

  function onResize() {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  }

  let ambientLightColor = 0xFFFFFF;
  let lightColor = 0xd8a674;
  // add subtle ambient lighting
  const ambientLight = new THREE.AmbientLight(ambientLightColor, 0.3);

  // ========================================
  // Ui
  // ========================================

  // stats.js
  // ----------------------------------------
  function initStats() {
    const stats = new Stats();
    stats.setMode(0);
    const styles = { position: 'absolute', left: 'unset', right: 0, top: 0 };
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
    this.cube = {
      width: 1,
      height: 1,
      depth: 1
    },
      this.log = function () {
        console.log(scene.getObjectByName('cube'));
      },
      this.light = {
        ambientColor: ambientLightColor,
        lensflarColor: lightColor,
        intensity: 1,
        distance: 100,
        decay: 1,
        position: {
          x: 30,
          y: 30,
          z: 30
        }
      }
  }
  const gui = new dat.GUI();
  const folders = {};
  folders.cube = gui.addFolder('cube');
  folders.cube.add(controls.cube, 'width', 1, 5).onChange(controls.log);
  folders.cube.add(controls.cube, 'height', 1, 5).onChange(controls.log);
  folders.cube.add(controls.cube, 'depth', 1, 5).onChange(controls.log);
  folders.light = gui.addFolder('light');
  folders.light.add(controls.light.position, 'x', 20, 50);
  folders.light.add(controls.light.position, 'y', 20, 50);
  folders.light.add(controls.light.position, 'z', 20, 50);
  folders.light.addColor(controls.light, 'ambientColor').onChange(function (e) {
    ambientLight.color = new THREE.Color(e);
  });
  folders.light.addColor(controls.light, 'lensflarColor').onChange(function (e) {
    light.color = new THREE.Color(e);
  });
  folders.light.add(controls.light, 'intensity', 0, 3).onChange(function (e) {
    light.intensity = e;
  });
  folders.light.add(controls.light, 'distance', 0, 100).onChange(function (e) {
    light.distance = e;
  });
  folders.light.add(controls.light, 'decay', 1, 100).onChange(function (e) {
    light.decay = e;
  });

  // ========================================
  // Create
  // ========================================

  // sprite
  // ----------------------------------------

  const mat = new THREE.SpriteMaterial({color: 0xffffff});
  const sprites = new THREE.Group();

  for (let x=-7; x<7; x++) {
    for (let y=-7; y<7; y++) {
      for (let z=-7; z<7; z++) {
        const sprite = new THREE.Sprite(mat);
        sprite.position.set(x * 20, y * 20, z * 20);
        sprite.translateX(Math.random() * 20);
        sprite.scale.x = sprite.scale.y = sprite.scale.z = Math.random() * 1;
        sprites.add(sprite);
      }
    }
  }
  scene.add(sprites);

  // plane
  // ----------------------------------------
  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(400, 100),
    new THREE.MeshPhongMaterial({ color: 0xffffff })
  )
  plane.position.set(0, -30, 0);
  plane.rotateX(-0.5 * Math.PI);

  // light
  // ----------------------------------------
  const lights = new THREE.Group();
  const light = new THREE.SpotLight(0xFFFFFF);
  lights.add(light);
  const lightMesh = new THREE.Mesh(
    new THREE.SphereGeometry(1),
    new THREE.MeshBasicMaterial({ color: 0xd8a674})
  )
  lights.add(lightMesh);
  lights.lookAt(0, 0, 0);
  lights.position.set(controls.light.position.x, controls.light.position.y, controls.light.position.z);
  light.castShadow = true;

  const cameraHelper = new THREE.CameraHelper(light.shadow.camera);
  cameraHelper.visible = false;

  // ========================================
  // Scene
  // ========================================

  scene.add(cameraHelper);
  scene.add(ambientLight);
  // scene.add(lights);
  // scene.add(plane);

  // ========================================
  // Animation
  // ========================================

  function renderScene() {
    // update
    // ----------------------------------------
    orbitControls.update();
    stats.update();
    window.addEventListener('resize', () => {
      onResize();
    });

    // shape
    // ----------------------------------------
    lights.position.set(controls.light.position.x, controls.light.position.y, controls.light.position.z);

    renderer.render(scene, camera);
    requestAnimationFrame(renderScene);
  }

  renderScene();
}
