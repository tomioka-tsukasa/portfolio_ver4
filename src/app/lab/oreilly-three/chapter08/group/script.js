// // ========================================
// //  npm run build
// // ========================================

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// import * as dat from '../../../../common/libs/ui/dat.gui';
// // https://github.com/dataarts/dat.gui
// import { Stats } from '../../../../common/libs/ui/stats';
// // https://github.com/mrdoob/stats.js

// ========================================
//  npm run dev
// ========================================

import * as THREE from 'three/build/three.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { SceneUtils } from 'three/examples/jsm/utils/SceneUtils.js';

import * as dat from '../../../../libs/ui/dat.gui.js';
// https://github.com/dataarts/dat.gui
import { Stats } from '../../../../libs/ui/stats.js';
// https://github.com/mrdoob/stats.js

window.addEventListener('load', init);

let plane, box, sphere, cylinder;
const group = new THREE.Group();

function init() {

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
  camera.position.set(20, 70, 42);
  const orbitControls = new OrbitControls(camera, myCanvas);

  // Stats.js
  // -----------------------------------------
  function initStats() {
    const stats = new Stats();
    stats.setMode(0);
    const styles = { position: 'absolute', top: 0, left: 'unset', right: 0 };
    Object.keys(styles).forEach(key => {
      stats.domElement.style[key] = styles[key];
    })
    document.querySelector('#stats').appendChild(stats.domElement);
    return stats;
  }
  const stats = initStats();

  // dat.GUI
  // ------------------------------------------
  const controls = new function () {
    this.rotate = false,
      this.grouping = false,
      this.groupData = {
        groupPosX: 0,
        groupPosY: 0,
        groupPosZ: 0,
        groupScale: 0
      },
      this.boxData = {
        boxPosX: 0,
        boxPosY: 0,
        boxPosZ: 0,
        boxScale: 0
      },
      this.sphereData = {
        spherePosX: 0,
        spherePosY: 0,
        spherePosZ: 0,
        sphereScale: 0
      },
      this.cylinderData = {
        cylinderPosX: 0,
        cylinderPosY: 0,
        cylinderPosZ: 0,
        cylinderScale: 0
      },
      this.createBoundingBox = function () {
        scene.remove(scene.getObjectByName('boxHelper'));
        const boxHelper = new THREE.BoxHelper(group, 0x000000);
        boxHelper.name = 'boxHelper';
        scene.add(boxHelper);
      }
  }

  const gui = new dat.GUI();
  gui.add(controls, 'grouping');
  gui.add(controls, 'rotate');
  const groupData = gui.addFolder('groupData');
  const boxData = gui.addFolder('boxData');
  const sphereData = gui.addFolder('sphereData');
  const cylinderData = gui.addFolder('cylinderData');
  groupData.add(controls.groupData, 'groupPosX', -20, 20);
  groupData.add(controls.groupData, 'groupPosY', -20, 20);
  groupData.add(controls.groupData, 'groupPosZ', -20, 20);
  groupData.add(controls.groupData, 'groupPosZ', -20, 20);
  boxData.add(controls.boxData, 'boxPosX', -20, 20).onChange(function (e) {
    box.position.x = e;
    controls.createBoundingBox();
  });
  boxData.add(controls.boxData, 'boxPosY', -20, 20).onChange(function (e) {
    box.position.y = e;
    controls.createBoundingBox();
  });
  boxData.add(controls.boxData, 'boxPosZ', -20, 20).onChange(function (e) {
    box.position.z = e;
    controls.createBoundingBox();
  });
  sphereData.add(controls.sphereData, 'spherePosX', -20, 20).onChange(function (e) {
    sphere.position.x = e;
    controls.createBoundingBox();
  });
  sphereData.add(controls.sphereData, 'spherePosY', -20, 20).onChange(function (e) {
    sphere.position.y = e;
    controls.createBoundingBox();
  });
  sphereData.add(controls.sphereData, 'spherePosZ', -20, 20).onChange(function (e) {
    sphere.position.z = e;
    controls.createBoundingBox();
  });
  cylinderData.add(controls.cylinderData, 'cylinderPosX', -20, 20).onChange(function (e) {
    cylinder.position.x = e;
    controls.createBoundingBox();
  });
  cylinderData.add(controls.cylinderData, 'cylinderPosY', -20, 20).onChange(function (e) {
    cylinder.position.y = e;
    controls.createBoundingBox();
  });
  cylinderData.add(controls.cylinderData, 'cylinderPosZ', -20, 20).onChange(function (e) {
    cylinder.position.z = e;
    controls.createBoundingBox();
  });
  controls.createBoundingBox();

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

  function createMesh(geom) {
    const mesh = new THREE.Group();
    const matWireframe = new THREE.MeshNormalMaterial({ wireframe: true });
    const matBase = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.9 });
    const geomWireframe = geom;
    const geomBase = geom.clone().scale(0.99, 0.99, 0.99);
    mesh.add(
      new THREE.Mesh(geomWireframe, matWireframe),
      new THREE.Mesh(geomBase, matBase)
    )
    return mesh;
  }

  function createSphere() {
    const radius = 6;
    const degree = 120;
    sphere = createMesh(
      new THREE.SphereGeometry(radius, radius * 2)
    )
    sphere.position.set(
      20 * Math.cos((Math.PI / 180) * degree),
      radius,
      20 * Math.sin((Math.PI / 180) * degree)
    );
    return sphere;
  }

  function createBox() {
    const radius = 8;
    const degree = 240;
    box = createMesh(
      new THREE.BoxGeometry(radius, radius, radius, radius / 2, radius / 2, radius / 2)
    )
    box.position.set(
      20 * Math.cos((Math.PI / 180) * degree),
      (radius / 2),
      20 * Math.sin((Math.PI / 180) * degree)
    );
    return box;
  }

  function createCylinder() {
    const degree = 0;
    const height = 10;
    cylinder = createMesh(
      new THREE.CylinderGeometry(3, 3, height, height)
    )
    cylinder.position.set(
      20 * Math.cos((Math.PI / 180) * degree),
      (height / 2),
      20 * Math.sin((Math.PI / 180) * degree)
    );
    return cylinder;
  }

  scene.add(
    createArrowHelper(),
    createPlane(),
    ambientLight
  )
  group.add(
    createSphere(),
    createBox(),
    createCylinder()
  )
  scene.add(group);

  // ========================================
  // Animation
  // ========================================

  let rotate = 0;
  function rendererScene() {
    // update
    // ------------------------------------------
    stats.update();
    orbitControls.update();

    // dat.GUI
    // ------------------------------------------
    if (controls.rotate && !controls.grouping) {
      rotate += 0.02;
      [sphere, box, cylinder].forEach(object3D => {
        object3D.rotation.x = rotate;
        object3D.rotation.y = rotate;
        object3D.rotation.z = rotate;
      });
    } else if (controls.rotate && controls.grouping) {
      rotate += 0.02;
      group.rotation.y = rotate;
      controls.createBoundingBox();
    }

    requestAnimationFrame(rendererScene);
    renderer.render(scene, camera);
  }

  rendererScene();
}
