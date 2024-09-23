import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const getBox: () => THREE.Mesh = () => {
  const geometry = new THREE.BoxGeometry( 10, 10, 10, 4, 4, 4 ) 
  const material = new THREE.MeshNormalMaterial({
    wireframe: true,
    transparent: true,
    opacity: .1
  }) 
  const mesh = new THREE.Mesh( geometry, material ) 
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

const getLight: () => THREE.SpotLight = () => {
  const light = new THREE.SpotLight( 0xffffff )
  light.position.set( 0, 100, 0 )
  light.intensity = 5000
  light.angle = Math.PI / 2
  light.distance = 2000
  light.decay = 1.5
  return light
}

const getRenderer: (
  canvas: Element
) => THREE.WebGLRenderer = (
  canvas
) => {
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize( canvas.clientWidth, canvas.clientHeight )
  renderer.setClearColor(new THREE.Color(0xFFFFFF))
  renderer.setPixelRatio(window.devicePixelRatio);
  canvas.appendChild( renderer.domElement )
  return renderer
}

const getCamera: () => THREE.PerspectiveCamera = () => {
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
  camera.position.z = 132
  camera.position.y = 24
  return camera
}

export {
  getBox,
  getLight,
  getRenderer,
  getCamera,
  getControls,
}
