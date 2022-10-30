import * as THREE from 'three'
import './style.css'

// scene
const scene = new THREE.Scene()

// mesh
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// camera
const camera = new THREE.PerspectiveCamera(75, 800 / 600)
camera.position.z = 3
camera.position.y = 1
scene.add(camera)

// renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas.webgl'),
})
renderer.setSize(800, 600)
renderer.render(scene, camera)
