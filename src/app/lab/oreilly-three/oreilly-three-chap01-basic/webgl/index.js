import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js';

import * as Stats from 'stats.js';
// https://github.com/mrdoob/stats.js
import * as dat from 'dat.gui';
// https://github.com/dataarts/dat.gui

export default function Canvas() {
  // ========================================
  // Definition
  // ========================================

  // Stats
  // ----------------------------------------
  function initStats() {
    const stats = new Stats();
    stats.setMode(0); // 0: fps, 1: ms
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';

    document.querySelector("#stats").appendChild(stats.domElement);
    return stats;
  }
  const stats = initStats();

  // dat.gui
  // ----------------------------------------
  const controls = new function() {
    this.animation = {};
    this.animation.rotationSpeed = 0.02;
    this.animation.bouncingSpeed = 3;
    this.camera = {
      x: -10,
      y: 15,
      z: 60
    }
  }
  const gui = new dat.GUI();
  const folders = {};
  folders.animation = gui.addFolder('animation');
  folders.animation.open();
  folders.animation.add(controls.animation, 'rotationSpeed', 0, 0.1);
  folders.animation.add(controls.animation, 'bouncingSpeed', 0, 5);
  folders.camera = gui.addFolder('camera');
  folders.camera.open();
  folders.camera.add(controls.camera, 'x', -60, 60);
  folders.camera.add(controls.camera, 'y', -30, 90);
  folders.camera.add(controls.camera, 'z', 30, 180);

  // ========================================
  // Setting
  // ========================================

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#canvas')
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(innerWidth, innerHeight);
  renderer.setClearColor(new THREE.Color(0x000000));
  renderer.shadowMap.enabled = true;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 1000);
  camera.position.set(controls.camera.x, controls.camera.y, controls.camera.z);
  camera.lookAt(scene.position);

  // ========================================
  // Scene
  // ========================================

  const spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(-40, 30, 20);
  scene.add(spotLight);
  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 4096 / 4;
  spotLight.shadow.mapSize.height = 4096 / 4;

  // ========================================
  // Create
  // ========================================

  const axes = new THREE.AxesHelper(20);
  scene.add(axes);

  // plane
  // ----------------------------------------
  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(60, 20),
    new THREE.MeshNormalMaterial({
      color: 0xcccccc
    })
  )
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.set(0, 0, 0);
  scene.add(plane);
  plane.receiveShadow = true;

  // cube
  // ----------------------------------------
  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(4, 4, 4, 4, 4, 4),
    new THREE.MeshNormalMaterial({
      color: 0xff0000,
      wireframe: false
    })
  )
  cube.position.set(15, 4, 0);
  scene.add(cube);
  cube.castShadow = true;

  // sphere
  // ----------------------------------------
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(2, 10, 10),
    new THREE.MeshNormalMaterial({
      color: 0x7777ff,
      wireframe: false
    })
  )
  sphere.position.set(-15, 4, 0);
  scene.add(sphere);
  sphere.castShadow = true;

  // ========================================
  // Composer
  // ========================================

  const orbitControls = new OrbitControls(camera, renderer.domElement);
  orbitControls.autoRotate = false;
  const clock = new THREE.Clock();

  const renderPass = new RenderPass(scene, camera);
  const effectGlitch = new GlitchPass(64);
  effectGlitch.renderToScreen = false;
  effectGlitch.goWild = true;
  const composer = new EffectComposer(renderer);
  composer.addPass(renderPass);

  document.querySelector("#effect").addEventListener('click', event => {
    composer.addPass(effectGlitch);
    console.log(composer);
    console.log(effectGlitch);
    setTimeout(() => {
      composer.removePass(effectGlitch);
      console.log(composer);
      console.log(effectGlitch);
    }, 300);
  });

  // ========================================
  // Animation
  // ========================================

  function onResize() {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  }

  let ratio = 0;
  function rendererScene() {
    // Scene
    // ----------------------------------------
    stats?.update();
    camera.position.set(controls.camera.x, controls.camera.y, controls.camera.z);
    camera.lookAt(scene.position);
    window.addEventListener('resize', () => {
      onResize();
    })

    // rotate the cube around its axes
    // ----------------------------------------
    cube.rotation.x += controls.animation.rotationSpeed;
    cube.rotation.y += controls.animation.rotationSpeed;
    cube.rotation.z += controls.animation.rotationSpeed;

    // bounce the sphere up and down
    // ----------------------------------------
    const radian = (ratio * Math.PI) / 180;
    ratio += controls.animation.bouncingSpeed;
    sphere.position.x = -15 + (10 * (Math.cos(radian)));
    sphere.position.y = 2 + (10 * Math.abs(Math.sin(radian)));

    requestAnimationFrame(rendererScene);

    const delta = clock.getDelta();
    orbitControls.update(delta);
    composer.render(delta);
  }

  rendererScene();
}
