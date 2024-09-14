import * as THREE from 'three';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';
import * as SceneUtils from 'three/addons/utils/SceneUtils.js';

import * as dat from 'dat.gui';
// https://github.com/dataarts/dat.gui
import * as Stats from 'stats.js';
// https://github.com/mrdoob/stats.js

let plane, INTERSECTED;
const meshValue = 27;
const range = 60;
const intersectTargets = [];
const clock = new THREE.Clock();

// ========================================
// Event
// ========================================

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseMove(event) {
  mouse.x = ( event.clientX / innerWidth ) * 2 - 1;
  mouse.y = -( event.clientY / innerHeight ) * 2 + 1;
}

export default function Canvas() {

  // ========================================
  // Definition
  // ========================================

  const myCanvas = document.querySelector('#canvas');
  const renderer = new THREE.WebGLRenderer({ canvas: myCanvas });
  renderer.setClearColor(0x000000);
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Scene
  // -----------------------------------------
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight);
  camera.position.set(0, 10, 130);
  const firstPersonControls = new FirstPersonControls(camera, myCanvas);
  firstPersonControls.lookSpeed = 0.05;
  firstPersonControls.movementSpeed = 40;
  firstPersonControls.mouseDragOn = true;

  // Raycaster
  // -----------------------------------------
  function intersectsRaycaster() {
    raycaster.setFromCamera( mouse, camera );
    const intersects = raycaster.intersectObjects( intersectTargets );
    if (intersects.length > 0) {
      if (INTERSECTED != intersects[0].object) {
        if (INTERSECTED) INTERSECTED.material.color.set(0xDC582A);
        INTERSECTED = intersects[0].object;
        if (INTERSECTED) INTERSECTED.material.color.set(0xFFFFFF);
      }
    } else {
      if (INTERSECTED) INTERSECTED.material.color.set(0xDC582A);
      INTERSECTED = null;
    }
  }

  // Stats.js
  // -----------------------------------------
  function initStats() {
    const stats = new Stats();
    stats.setMode(0);
    const styles = { position: 'absolute', top: 0, left: 'unset', right: 0 };
    Object.keys(styles).forEach(key => {
      stats.domElement.style[key] = styles[key];
    });
    document.querySelector('#stats').appendChild(stats.domElement);
    return stats;
  }
  const stats = initStats();

  // dat.GUI
  // ------------------------------------------

  // ========================================
  // Create
  // ========================================

  // Light
  // ----------------------------------------

  const ambientLight = new THREE.AmbientLight(0xFFFFFF);

  // Helper
  // ----------------------------------------

  function createPlane() {
    const matWireframe = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });
    const matBase = new THREE.MeshBasicMaterial({ color: 0xAAAAAA, side: THREE.DoubleSide, transparent: true, opacity: 0.5 });
    const geom = new THREE.PlaneGeometry(500, 500, 50, 50);
    plane = SceneUtils.createMultiMaterialObject(geom, [matWireframe, matBase]);
    plane.children[0].position.set(0, 0, 0.1);
    plane.rotation.x = - (1 / 2 * Math.PI);
    return plane;
  }

  function createArrowHelper() {
    const arrowHelper = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 0), 10, 0x0000ff);
    console.log(arrowHelper);
    return arrowHelper;
  }

  function createMesh(x, y, z) {
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(6, 6, 6),
      new THREE.MeshBasicMaterial({ color: 0xDC582A, transparent: true, opacity: 0.9})
    )
    mesh.position.set(x, y+3, z);
    scene.add(mesh);
    intersectTargets.push(mesh);
  }

  for (let i = 0; i<meshValue; i++) {
    const x = ( -Math.random() * range ) + ( Math.random() * range );
    const y = (Math.random() * (range / 2) );
    const z = ( -Math.random() * range ) + ( Math.random() * range );
    createMesh(x, y, z)
  }

  const rotater = new THREE.Mesh(
    new THREE.BoxGeometry(100, 6, 6),
    new THREE.MeshBasicMaterial({ color: 0xDC582A, transparent: true, opacity: 0.9 })
  )
  rotater.position.y = 50;
  intersectTargets.push(rotater);

  scene.add(
    createArrowHelper(),
    createPlane(),
    ambientLight,
    rotater
  )

  // ========================================
  // Animation
  // ========================================

  let rotate = 0;
  function rendererScene() {
    // update
    // ------------------------------------------
    stats.update();
    rotate += 0.02;
    const delta = clock.getDelta();
    firstPersonControls.update(delta);
    firstPersonControls.heightMax = 2.0;
    console.log(camera.position.y)
    if (camera.position.y <= 5) {
      camera.position.y = 5;
    } else if (camera.position.y >= 7) {
      camera.position.y = 7;
    }

    // dat.GUI
    // ------------------------------------------
    intersectsRaycaster();
    rotater.rotation.y = rotate;
    requestAnimationFrame(rendererScene);
    renderer.render(scene, camera);
  }
  document.addEventListener('mousemove', onMouseMove, false);
  rendererScene();
}
