let twoDimensional;
let baseScene = document.querySelector('a-scene');

function replace(scene) {
  const replacableDiv = document.getElementById('replace');
  const text = document.createElement('a-text');
  text.setAttribute('value', replacableDiv.textContent);
  text.setAttribute('color', '#4CC3D9');
  text.setAttribute('position', {x: -1, y: 0.5, z: -3});

  replacableDiv.parentNode.removeChild(replacableDiv);
  scene.appendChild(text);
}

function init () {
  const scene = document.querySelector('a-scene');
  replace(scene);
}

function resetScene () {
  const scene = document.querySelector('a-scene');
  scene.addEventListener('enter-vr', function () {
    twoDimensional = document.body.innerHTML;
    init();
  });

  scene.addEventListener('exit-vr', function () {
    document.body.innerHTML = twoDimensional;
    resetScene();
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
