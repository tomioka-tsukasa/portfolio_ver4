import * as THREE from 'three'
import { GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { getCamera, getControls, getLight, getRenderer } from './module'

export default function Canvas() {
  const loader = new GLTFLoader()
  loader.load('/lab/webgl/webgl-3dmodel-try-wssyr74yrp/tv-cabinet.glb', (model) => {
    Init(model)
  })
}

function Init(model: GLTF) {
  const canvas = document.querySelector('#canvas')
  if (!canvas) return 

  model.scene.position.y = -50

  const scene = new THREE.Scene()
  const camera = getCamera()
  const renderer = getRenderer(canvas)

  const lightFront = getLight()
  lightFront.position.set( 55, 100, 50 )
  const lightBack = getLight()
  lightBack.position.set( -55, 100, -50 )

  const controls = getControls(camera, renderer)

  scene.add(
    model.scene,
    lightFront,
    lightBack,
  )

  function animate() {
    controls.update()
    renderer.render( scene, camera )
  }
  renderer.setAnimationLoop( animate )
}
