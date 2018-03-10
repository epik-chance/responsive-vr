let twoDimensional;
let baseScene = document.querySelector('a-scene');

const rgb2Hex = (rgb) => {
  if (rgb.search("rgb") === -1) return rgb;
  rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
  const hex = (x) => ("0" + parseInt(x).toString(16)).slice(-2);
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
};

function replace(scene) {
  initializeScene(scene);
  replaceHeader(scene);
}

const initializeScene = (scene) => {
  const floor = document.createElement('a-plane');
  floor.setAttribute('position', {x: 0, y: 0, z: 0});
  floor.setAttribute('rotation', {x: -90, y: 0, z: 0});
  floor.setAttribute('height', 10);
  floor.setAttribute('width', 10);
  floor.setAttribute('color', '#fff');
  scene.appendChild(floor);
}

const replaceHeader = (scene) => {
  // Get element to replace
  const headerElement = document.getElementsByClassName('title-bar')[0];
  // Create VR object
  const headerText = document.createElement('a-text');
  // Set properties
  headerText.setAttribute('value', headerElement.textContent);
  console.log(rgb2Hex(getComputedStyle(headerElement).color));
  headerText.setAttribute('color', rgb2Hex(getComputedStyle(headerElement).color));
  headerText.setAttribute('position', {x: -1, y: 3, z: -3});
  // Clean up element from HTML, add to VR
  headerElement.parentNode.removeChild(headerElement);
  scene.appendChild(headerText);
}

function init () {
  const scene = document.querySelector('a-scene');
  scene.classList.remove('hide');
  scene.addFullScreenStyles();
  const camera = document.querySelector('[camera]');
  camera.setAttribute('position', {x: 0, y: 1.6, z: 0});
  replace(scene);
}

function resetScene () {
  const scene = document.querySelector('a-scene');

  scene.classList.add('hide');
  scene.addEventListener('enter-vr', function () {
    twoDimensional = document.body.innerHTML;
    init();
  });

  scene.addEventListener('exit-vr', function () {
    document.body.innerHTML = twoDimensional;
    resetScene();
  });

  document.getElementsByClassName('title-bar')[0].addEventListener('click', () => {
    scene.enterVR();
  })
}

baseScene.addEventListener('enter-vr', function () {
  twoDimensional = document.body.innerHTML;
  init();
});

baseScene.addEventListener('exit-vr', function () {
  document.body.innerHTML = twoDimensional;
  resetScene();
})

baseScene.removeFullScreenStyles();

document.getElementsByClassName('title-bar')[0].addEventListener('click', () => {
  baseScene.enterVR();
})
