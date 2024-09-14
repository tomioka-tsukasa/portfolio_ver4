// // ========================================
// //  npm run build
// // ========================================

// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';;

// import * as dat from '../../../../common/libs/ui/dat.gui';
// // https://github.com/dataarts/dat.gui
// import { Stats } from '../../../../common/libs/ui/stats';
// // https://github.com/mrdoob/stats.js

// ========================================
//  npm run dev
// ========================================

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';;

import * as dat from 'dat.gui';
// https://github.com/dataarts/dat.gui
import * as Stats from 'stats.js';
// https://github.com/mrdoob/stats.js


function init() {

  // ========================================
  // Definition
  // ========================================
  function onResize() {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  }

  const positions = [];
  const particles = [];
  const rangeX = innerWidth/6;
  const rangeY = 120;
  const randomSpeed = {};

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load('../../../../common/images/texture/particle/raindrop-1.png');

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

  const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight);
  camera.position.set(0, 0, 120);

  const orbitControls = new OrbitControls(camera, myCanvas);
  orbitControls.autoRotate = true;
  orbitControls.autoRotateSpeed = 1.5;

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
    this.size = 10;
    this.transparent = true;
    this.opacity = 0.3;
    this.color = 0xffffff;
    this.sizeAttenuation = true;

    this.redraw = function () {
      particles.length = 0;
      scene.remove(scene.getObjectByName('rain'));
      createParticle('rain', texture, 5, controls.transparent, controls.opacity, controls.sizeAttenuation, controls.color, 4);
      console.log(scene)
    };
  };

  const gui = new dat.GUI();
  gui.add(controls, 'size', 0, 20).onChange(controls.redraw);
  gui.add(controls, 'transparent').onChange(controls.redraw);
  gui.add(controls, 'opacity', 0, 1).onChange(controls.redraw);
  gui.addColor(controls, 'color').onChange(controls.redraw);
  gui.add(controls, 'sizeAttenuation').onChange(controls.redraw);
  controls.redraw();

  // ========================================
  // Create
  // ========================================

  // particle
  // ----------------------------------------
  function createParticle(
    name,
    texture,
    size,
    transparent,
    opacity,
    sizeAttenuation,
    color,
    particleValue
  ) {
    const mat = new THREE.PointsMaterial({
      size: size,
      transparent: transparent,
      opacity: opacity,
      depthWrite: false,
      map: texture,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: sizeAttenuation,
      color: color
    });

    const geom = new THREE.BufferGeometry();
    for (let x = -particleValue; x < particleValue; x++) {
      for (let y = -particleValue; y < particleValue; y++) {
        for (let z = -particleValue; z < particleValue; z++) {
          positions.push(Math.random() * rangeX - rangeX / 2);
          positions.push(Math.random() * rangeY - rangeY / 1.5);
          positions.push(Math.random() * rangeX - rangeX / 2);
        }
      }
    }

    const positionsArray = new Float32Array(positions);
    geom.setAttribute('position', new THREE.BufferAttribute(positionsArray, 3));
    const particle = new THREE.Points(geom, mat);
    particle.name = name;
    particles.push(name);
    scene.add(particle);

    randomSpeed[name] = { y: {} };

    for (let i = 0; i < positions.length; i++) {
      randomSpeed[name].y[i] = 0.5 + Math.random();
    }
  }

  // ========================================
  // Scene
  // ========================================

  // ========================================
  // Animation
  // ========================================

  function animateParticle(name) {
    const position = scene.getObjectByName(name).geometry.attributes.position;
    scene.getObjectByName(name).geometry.attributes.position.needsUpdate = true;
    for (let i = 0; i < positions.length; i++) {
      const positionNow = {
        x: position.getX(i),
        y: position.getY(i)
      }

      position.setY(i, positionNow.y - randomSpeed[name].y[i]);
      position.setX(i, positionNow.x - 0.3);

      if (positionNow.y <= -(rangeY / 1.5 - Math.random() * 10)) {
        position.setY(i, (rangeY / 1.5 - Math.random() * 10));
      } else {
        position.setY(i, positionNow.y - randomSpeed[name].y[i]);
      }

      if (positionNow.x <= -rangeX/2) {
        position.setX(i, -positionNow.x);
      }
    }
  }


  let counter = 0;
  function renderScene() {
    // update
    // ----------------------------------------
    stats.update();
    orbitControls.update();
    counter += 1;
    window.addEventListener('resize', () => {
      onResize();
    });

    // scene
    // ----------------------------------------
    animateParticle('rain');

    requestAnimationFrame(renderScene);
    renderer.render(scene, camera);
  }

  renderScene();
}
