// This three variables are the primary things you have to set up for every ThreeJS project:
// 1. SCENE
let scene = new THREE.Scene();

// 2. CAMERA
// creating a PERSPECTIVE camera (there are also more) with 4 different parameters
let camera = new THREE.PerspectiveCamera(
  75, // field of view of the FOB (frontend or backend)
  window.innerWidth/window.innerHeight, // the aspect ratio based on the inner width and inner height
   0.1, // near and far plane
  1000 // ???
  );

// 3. RENDERER (WebGL, CSS 2d, CSS 3d, SVG)
let renderer = new THREE.WebGLRenderer({antialias: true}); // otherwise the result will look jagged
renderer.setClearColor("#e5e5e5"); // set the background color
renderer.setSize(window.innerWidth,window.innerHeight); // set the size of the render

// now we need to append child the renderer DOM element. In a fancy way: I create our canvas element with the renderer settings
document.body.appendChild(renderer.domElement);

// readjusting the window screen
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth,window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  // everytime we have an adjustment on the camera we have to call update Project Matrix function
  camera.updateProjectMatrix();
})

// in order to have the background colour set up we need to render it in the renderer with the method render
renderer.render(scene, camera);
