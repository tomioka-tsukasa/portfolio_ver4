import * as THREE from 'three';
import * as SceneUtils from 'three/addons/utils/SceneUtils.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';;

import * as dat from 'dat.gui';
// https://github.com/dataarts/dat.gui
import * as Stats from 'stats.js';
// https://github.com/mrdoob/stats.js

export default function Canvas() {

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
  scene.fog = new THREE.Fog(0x000000, 50, 200);

  const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight);
  camera.position.set(30, 50, 70);
  const orbitControls = new OrbitControls(camera, myCanvas);
  orbitControls.autoRotate = true;
  orbitControls.autoRotateSpeed = 4.0;

  function onResize() {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  }

  let ambientLightColor = 0x000000;
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
    const styles = { position: 'absolute', left: 0, right: 'unset', top: 0 };
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

  // Convex
  // ----------------------------------------
  function createChameleon(count=5) {
    let dots = "";
    function createPoints(count_) {
      const points = [];
      const count = count_;
      const radius = 10;
      let counter = 0;
      for (let i=0; i<count; i++) {
        counter = i / 10;
        const x = i * 4;
        const y = radius * Math.sin( counter  * Math.PI );
        // for (let i=0; i<count; i++) {
        //   const z = (i- (count/2) ) * 3;
        //   const point = new THREE.Vector3(x, y, z);
        //   points.push(point);
        // }
        const point = new THREE.Vector3(x, y, 0);
        points.push(point);
      }
      return points;
    }
    const points = createPoints(count);

    function createDots() {
      const dots = new THREE.Group();
      points.forEach( point => {
        const dot = new THREE.Mesh(
          new THREE.SphereGeometry(0.2),
          new THREE.MeshBasicMaterial()
        );
        // dot.position.x = point.x;
        // dot.position.y = point.y;
        dot.position.copy(point);
        dots.add(dot);
      });
      return dots;
    }
    dots = createDots();

    function createLathe() {
      const geom = new THREE.LatheGeometry(points, 30, 0);
      const matBase = new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.5
      });
      const matWire = new THREE.MeshBasicMaterial({ wireframe: true, color: 0x1673E0 });
      const lathe = SceneUtils.createMultiMaterialObject(geom, [matBase, matWire]);
      return lathe;
    }
    const lathe = createLathe();

    const Chameleon = new THREE.Group();
    Chameleon.add(dots);
    Chameleon.add(lathe);
    Chameleon.name = "Chameleon";

    return Chameleon;
  }
  const Chameleon = createChameleon();

  // plane
  // ----------------------------------------
  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(400, 100),
    new THREE.MeshPhongMaterial({ color: 0x000000 })
  )
  plane.position.set(0, -30, 0);
  plane.rotateX(-0.5 * Math.PI);

  // light
  // ----------------------------------------
  const lights = new THREE.Group();
  const light = new THREE.SpotLight(0x000000);
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
  scene.add(Chameleon);
  // scene.add(plane);

  // ========================================
  // Animation
  // ========================================

  let count = 0;
  let circle = 5;
  let radian = 0;
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

    count += 1;
    if ((count % 3) === 0) {
      radian += 0.02;

      if ( Math.sin(radian * Math.PI) < 0 ) {
        circle -= 1;
        scene.remove(scene.getObjectByName("Chameleon"));
        scene.add(createChameleon(circle));
      } else {
        circle += 1;
        scene.remove(scene.getObjectByName("Chameleon"));
        scene.add(createChameleon(circle));
      }
    }

    renderer.render(scene, camera);
    requestAnimationFrame(renderScene);
  }

  renderScene();
}
