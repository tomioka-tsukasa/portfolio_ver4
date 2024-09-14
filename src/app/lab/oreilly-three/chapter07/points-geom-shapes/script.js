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

import * as dat from '../../../../libs/ui/dat.gui.js';
// https://github.com/dataarts/dat.gui
import { Stats } from '../../../../libs/ui/stats.js';
// https://github.com/mrdoob/stats.js

window.addEventListener('load', loadFonts);

const fonts = {};
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('../../../../common/images/texture/lensflare/lensflare0_alpha.png');
const positions = [];
const rangeX = innerWidth;
const rangeY = innerHeight;
const rangeZ = innerHeight;
const textGeomPositionXYZ = {};
const pointGeomPositionXYZ = {};
let particleValue = 0;
let textGeom, pointGeom;
let textPointsValue = 0;
let counter = 0;
let degree = 0;
let rot = 0;
let targetRot = 0;
let mouseX = 360;
let isMobie = false;

function mobieChanger() {
  if (innerWidth > 460) {
    fonts.size = 20;
    isMobie = false;
  } else {
    fonts.size = 15;
    isMobie = true;
  }
}
mobieChanger();

document.addEventListener("mousemove", (event) => {
  mouseX = event.pageX;
});

function loadFonts() {
  const fontLoader = new THREE.FontLoader();
  fontLoader.load('../../../../common/fonts/Roboto-Thin_Regular.json', function (Roboto) {
    fonts['Roboto'] = Roboto;
    init();
  })
}

function init() {
  // ========================================
  // Definition
  // ========================================
  function onResize() {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
    mobieChanger();
  }

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
  camera.position.set(0, 10, 100);

  const orbitControls = new OrbitControls(camera, myCanvas);
  // orbitControls.autoRotate = true;
  orbitControls.autoRotateSpeed = 8;

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
    this.camera = {
      zoomout: 1
    },
      this.guiFonts = {
        height: 1,
        weight: "bold",
        curveSegments: 2,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 1,
        bevelOffset: 0,
        bevelSegments: 1,
        steps: 1
      },
      this.createFonts = function () {
        const text = createFont(controls.guiFonts, texture);
        scene.remove(scene.getObjectByName('text'));
        scene.add(text);
        console.log(scene)
      }
  }

  const gui = new dat.GUI();
  const folders = {};
  // folders.camera = gui.addFolder('camera');
  // // folders.camera.open();
  // folders.camera.add(controls.camera, 'zoomout', 1, 50);
  // folders.fonts = gui.addFolder('fonts');
  // // folders.fonts.open();
  // folders.fonts.add(controls.guiFonts, 'height', 0, 200).onChange(controls.createFonts);
  // folders.fonts.add(controls.guiFonts, 'bevelThickness', 0, 10).onChange(controls.createFonts);
  // folders.fonts.add(controls.guiFonts, 'bevelSize', 0, 10).onChange(controls.createFonts);
  // folders.fonts.add(controls.guiFonts, 'bevelSegments', 0, 30).step(1).onChange(controls.createFonts);
  // folders.fonts.add(controls.guiFonts, 'bevelEnabled').onChange(controls.createFonts);
  // folders.fonts.add(controls.guiFonts, 'curveSegments', 1, 30).step(1).onChange(controls.createFonts);
  // folders.fonts.add(controls.guiFonts, 'steps', 1, 5).step(1).onChange(controls.createFonts);

  // ========================================
  // Create
  // ========================================

  // particle
  // ----------------------------------------
  function createFont(optionsObj, texture) {
    const mat = new THREE.PointsMaterial({
      size: 5,
      depthWrite: false,
      map: texture,
      blending: THREE.AdditiveBlending,
      color: 0xFFFFFF
    });

    const options = {
      font: fonts.Roboto,
      size: fonts.size,
      height: 5,
      weight: "normal",
      curveSegments: 2,
      // bevelEnabled: true,
      // bevelThickness: 1,
      // bevelSize: 1,
      // bevelOffset: 0,
      // bevelSegments: 1,
      // steps: 1
    }

    textGeom = new THREE.TextGeometry('L', options);
    textGeom = new THREE.TextGeometry('Particle Art. / three.js', options);
    textGeom.computeBoundingBox();
    // textGeom.center();

    textGeom.parameters.shapes.forEach(shape => {
      textPointsValue += shape.curves.length;
    })

    console.log(textGeom.parameters.shapes);
    textGeom.parameters.shapes.forEach ( (shape, indexShape, arrayShape) => {
      shape.curves.forEach( (curve, indexCurve, arrayCurve) => {
        textGeomPositionXYZ[particleValue] = {x: {}, y: {}, z: {}};
        textGeomPositionXYZ[particleValue].x = curve.v1.x;
        textGeomPositionXYZ[particleValue].y = curve.v1.y;
        textGeomPositionXYZ[particleValue].z = textGeom.attributes.position.getZ(particleValue);

        const index = particleValue + 1;
        textGeomPositionXYZ[index] = { x: {}, y: {}, z: {} };
        textGeomPositionXYZ[index].x = curve.v2.x;
        textGeomPositionXYZ[index].y = curve.v2.y;
        textGeomPositionXYZ[index].z = textGeom.attributes.position.getZ(index);
        particleValue += 2;
      })
    })
    console.log(particleValue);
    console.log(textGeomPositionXYZ);

    pointGeom = new THREE.BufferGeometry();
    for (let i = 0; i < particleValue; i++) {
      positions.push(Math.random() * rangeX - rangeX / 2);
      positions.push(Math.random() * rangeY - rangeY / 2);
      positions.push(Math.random() * rangeZ - rangeZ / 2);
    // for (let i = 0; i < particleValue / 5.1; i++) {
      // positions.push(Math.random() * rangeX - rangeX / 2);
      // positions.push('');
      // positions.push('');
      // positions.push('');
      // positions.push('');
      // positions.push(Math.random() * rangeY - rangeY / 2);
      // positions.push('');
      // positions.push('');
      // positions.push('');
      // positions.push('');
      // positions.push(Math.random() * rangeZ - rangeZ / 2);
      // positions.push('');
      // positions.push('');
      // positions.push('');
      // positions.push('');
    }
    const positionArray = new Float32Array(positions);
    pointGeom.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
    const textPoints = new THREE.Points(pointGeom, mat);
    textPoints.frustumCulled = true;
    console.log(pointGeom.attributes.position.count)

    const textLine = new THREE.Mesh(
      textGeom,
      new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0.7,
        color: 0xFFFFFF
      })
    )

    for (let i = 0; i < particleValue; i++) {
      // textGeomPositionXYZ[i] = {};
      // textGeomPositionXYZ[i].x = textGeom.attributes.position.getX(i);
      // textGeomPositionXYZ[i].y = textGeom.attributes.position.getY(i);
      // textGeomPositionXYZ[i].z = textGeom.attributes.position.getZ(i);
    }

    for (let i = 0; i < particleValue; i++) {
      pointGeomPositionXYZ[i] = {};
      pointGeomPositionXYZ[i].x = pointGeom.attributes.position.getX(i);
      pointGeomPositionXYZ[i].y = pointGeom.attributes.position.getY(i);
      pointGeomPositionXYZ[i].z = pointGeom.attributes.position.getZ(i);
    }

    const text = new THREE.Group();
    text.add(textPoints);
    text.add(textLine);

    text.name = "text";
    return text;
  }

  // ========================================
  // Scene
  // ========================================
  const ambientLight = new THREE.AmbientLight(0x000000);
  ambientLight.position.y = 100;
  // scene.add(ambientLight);

  const text = createFont(controls.guiFonts, texture);
  scene.add(text);

  // ========================================
  // Animation
  // ========================================

  function renderScene() {
    // update
    // ----------------------------------------
    stats.update();
    counter += 1;
    degree -= 0.007;
    window.addEventListener('resize', () => {
      onResize();
    });

    // scene
    // ----------------------------------------

    pointGeom.attributes.position.needsUpdate = true;

    if (Math.sin(degree * Math.PI) < 0) {
      for (let i = 0; i < pointGeom.attributes.position.count; i++) {
        let currentX = pointGeom.attributes.position.getX(i);
        let currentY = pointGeom.attributes.position.getY(i);
        let currentZ = pointGeom.attributes.position.getZ(i);
        const targetX = textGeomPositionXYZ[i].x;
        const targetY = textGeomPositionXYZ[i].y;
        const targetZ = textGeomPositionXYZ[i].z;
        currentX += (targetX - currentX) * 0.1;
        currentY += (targetY - currentY) * 0.1;
        currentZ += (targetZ - currentZ) * 0.1;
        pointGeom.attributes.position.setXYZ(i, currentX, currentY, currentZ);
      };
    } else {
      for (let i = 0; i < pointGeom.attributes.position.count; i++) {
        let currentX = pointGeom.attributes.position.getX(i);
        let currentY = pointGeom.attributes.position.getY(i);
        let currentZ = pointGeom.attributes.position.getZ(i);
        const targetX = pointGeomPositionXYZ[i].x;
        const targetY = pointGeomPositionXYZ[i].y;
        const targetZ = pointGeomPositionXYZ[i].z;
        currentX += (targetX - currentX) * 0.009;
        currentY += (targetY - currentY) * 0.009;
        currentZ += (targetZ - currentZ) * 0.009;
        pointGeom.attributes.position.setXYZ(i, currentX, currentY, currentZ);
      };
    }

    if (innerWidth > 768) {
      // // マウスのX座標がステージの幅の何%の位置にあるか調べてそれを360度で乗算する
      // targetRot = (mouseX / window.innerWidth) * 360;
      // rot += (targetRot - rot) * 0.02;
      // const radian = (rot * Math.PI) / 180;
      // camera.position.x = 100 * Math.cos(radian);
      // camera.position.z = 50 * Math.sin(radian);
      // camera.lookAt(new THREE.Vector3(0, 0, 0));
      orbitControls.update();
    } else if (isMobie) {
      orbitControls.update();
    }

    requestAnimationFrame(renderScene);
    renderer.render(scene, camera);
  }

  renderScene();
}
