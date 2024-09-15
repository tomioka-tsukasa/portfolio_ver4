import * as THREE from 'three'
import { GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const getBox: () => THREE.Mesh = () => {
  const geometry = new THREE.BoxGeometry( 10, 10, 10, 4, 4, 4 ); 
  const material = new THREE.MeshNormalMaterial({
    wireframe: true,
    transparent: true,
    opacity: .1
  }); 
  const mesh = new THREE.Mesh( geometry, material ); 
  return mesh
}

const getControls: (
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer
) => OrbitControls = (
  camera,
  renderer,
) => {
  const ctrl = new OrbitControls(camera, renderer.domElement)
  ctrl.update()
  ctrl.autoRotate = true
  return ctrl
}

export default function Canvas() {
  const loader = new GLTFLoader()
  loader.load('/lab/webgl/webgl-3dmodel-try-wssyr74yrp/moon.glb', (model) => {
    Init(model)
  })
}

function Init(model: GLTF) {
  const canvas = document.querySelector('#canvas')
  if (!canvas) return 

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
  camera.position.z = 12

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize( canvas.clientWidth, canvas.clientHeight )
  canvas.appendChild( renderer.domElement )

  const light = new THREE.HemisphereLight( 0xffffff, 0xffffff, 1 );
  model.scene.position.y = -3

  const box = getBox()
  const controls = getControls(camera, renderer)

  scene.add(
    model.scene,
    light,
    box
  )

  function animate() {
    controls.update()
    renderer.render( scene, camera )
  }
  renderer.setAnimationLoop( animate )
}
