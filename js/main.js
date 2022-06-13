import * as THREE from '../node_modules/three/build/three.module.js'
// import {OrbitControls} from '../node_modules/three/examples/js/controls/OrbitControls.js'

// const controls = new OrbitControls(camera, renderer.domElement)
const scene = new THREE.Scene()
// const canvas = document.querySelector('.canvas')
const canvas = document.querySelector('.three')
const camera = new THREE.PerspectiveCamera(
  75,
  canvas.offsetWidth / canvas.offsetHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGLRenderer()

renderer.setSize(canvas.offsetWidth, canvas.offsetHeight)

console.log(canvas.offsetWidth)
console.log(canvas.offsetHeight)

canvas.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry(2, 2, 2)
const material = new THREE.MeshBasicMaterial({color: 0x00ff00})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5

function animate() {
  requestAnimationFrame(animate)
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera)
}

animate()
