import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import * as dat from 'dat.gui';
// https://github.com/dataarts/dat.gui
import * as Stats from 'stats.js';
// https://github.com/mrdoob/stats.js

export default function Canvas() {

  // ========================================
  // Definition
  // ========================================

  function onResize() {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  }

  let ambientLightColor = 0x0c0c0c;
  let pointLightColor = 0xd8a674;
  const pointLight = new THREE.PointLight(pointLightColor, 1.5, 2000);

  // ========================================
  // Scene
  // ========================================

  const myCanvas = document.querySelector('#canvas');
  const renderer = new THREE.WebGLRenderer({
    canvas: myCanvas
  });
  renderer.setSize(innerWidth, innerHeight);
  renderer.setClearColor(new THREE.Color(0xEEEEEE));
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight);
  camera.position.set(30, 30, 100);
  const orbitControls = new OrbitControls(camera, myCanvas);

  // add subtle ambient lighting
  const ambientLight = new THREE.AmbientLight(ambientLightColor);

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
        lensflarColor: pointLightColor,
        intensity: 1,
        distance: 100,
        decay: 1,
        position: {
          x: 20,
          y: 20,
          z: 20
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

  // cube
  // ----------------------------------------
  // MultiMaterial
  const multiMaterial = [];
  const colors = [
    0x009e60,
    0x009e60,
    0x0051ba,
    0x0051ba,
    0xffd500,
    0xffd500,
    0xff5800,
    0xff5800,
    0xC41E3A,
    0xC41E3A,
    0xffffff,
    0xffffff
  ]
  colors.forEach( color => {
    multiMaterial.push(new THREE.MeshLambertMaterial({color: color}));
  });

  const cubes = new THREE.Group();

  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      for (let z = 0; z < 3; z++) {
        const cubeGeom = new THREE.BoxGeometry(2.9, 2.9, 2.9);
        const cube = new THREE.Mesh(cubeGeom, multiMaterial);
        cube.position.set(x * 3 - 3, y * 3, z * 3 - 3);
        cubes.add(cube);
      }
    }
  }

  // plane
  // ----------------------------------------
  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 30),
    new THREE.MeshPhongMaterial({ color: 0xffffff })
  )
  plane.position.set(0, -3, 0);
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

  scene.add(cameraHelper);
  scene.add(ambientLight);
  scene.add(lights);
  scene.add(cubes);
  scene.add(plane);

  // ========================================
  // Animation
  // ========================================

  let degree = 0;
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
    degree += 0.02;
    cubes.rotation.y = degree;
    lights.position.set(controls.light.position.x, controls.light.position.y, controls.light.position.z);

    renderer.render(scene, camera);
    requestAnimationFrame(renderScene);
  }

  renderScene();
}
