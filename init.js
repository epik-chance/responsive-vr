const scene = document.querySelector('a-scene');

function replace(scene) {
  const replacableDiv = document.getElementById('replace');
  replacableDiv.parentNode.removeChild(replacableDiv);
  const box = document.createElement('a-box');
  box.setAttribute('position', {x: -1, y: 0.5, z: -3});
  box.setAttribute('rotation', {x: 0, y: 45, z: 0});
  box.setAttribute('color', '#4CC3D9');
  scene.appendChild(box);
}

function init () {
  replace(scene);
}

scene.addEventListener('enter-vr', function () {
  init();
});

scene.addEventListener('exit-vr', function () {
  location.reload();
})
