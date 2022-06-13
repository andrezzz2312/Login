import * as THREE from '../node_modules/three/build/three.module.js'
// import {OrbitControls} from '../node_modules/three/examples/js/controls/OrbitControls.js'

// const controls = new OrbitControls(camera, renderer.domElement)
let scene, camera, renderer, cube, canvas
function init() {
  scene = new THREE.Scene()
  canvas = document.querySelector('.three')
  camera = new THREE.PerspectiveCamera(
    75,
    canvas.offsetWidth / canvas.offsetHeight,
    0.1,
    1000
  )

  renderer = new THREE.WebGLRenderer({alpha: true, antialias: true})

  renderer.setSize(canvas.offsetWidth, canvas.offsetHeight)

  canvas.appendChild(renderer.domElement)

  const geometry = new THREE.BoxGeometry(2, 2, 2)
  const material = new THREE.MeshBasicMaterial({color: 0x00ff00})
  cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  camera.position.z = 5
}

function animate() {
  requestAnimationFrame(animate)
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera)
}
function onWindowResize() {
  camera.aspect = canvas.offsetWidth / canvas.offsetHeight
  camera.updateProjectionMatrix()
  renderer.setSize(canvas.offsetWidth, canvas.offsetHeight)
}
window.addEventListener('resize', onWindowResize, false)
init()
animate()
