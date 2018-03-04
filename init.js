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
  const scene = document.querySelector('a-scene');
  replace(scene);
  document.body.appendChild(scene);
}

window.addEventListener('vrdisplayactivate', function () {
  console.log("reached");
  init();
});

// function start() {
//   var displays = navigator.getVRDisplays();
//   console.log(displays.length);
//   if(displays.length >= 1) {
//     init();
//   }
//
// }

// start();
