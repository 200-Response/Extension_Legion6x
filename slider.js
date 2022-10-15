const slider = document.getElementById('myRange');
let bton = document.getElementById('buttonOk');
const redFace = document.getElementById('redFace');
const yellowFace = document.getElementById('yellowFace');
const greenFace = document.getElementById('greenFace');
const parraf = document.getElementById('parraf');

// const btnOk = document.getElementById('buttonOk');
// const output = document.getElementById('value');

// output.innerHTML = slider.value;

// slider.oninput = function () {
//   output.innerHTML = this.value;
// };

slider.addEventListener('mousemove', function () {
  // var x = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  let x = slider.value;
  // let color = `linear-gradient(90deg, rgb(213,0,0), rgb(249,205,53), rgb(0,221,3)`;
  // slider.style.background = color;

  if (x > 75) {
    // slider.style.background = `linear-gradient(90deg, rgb(213,0,0), rgb(249,205,53), rgb(0,221,3)`;
  } else if (x > 50) {
    // slider.style.background = `linear-gradient(90deg, rgb(213,0,0), rgb(249,205,53), rgb(214,214,214) ${x}%)`;
  } else if (x > 20) {
    // slider.style.background = `linear-gradient(90deg, rgb(213,0,0), rgb(214,214,214) ${x}%)`;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  bton.addEventListener('click', function () {
    // link.innerHTML = 'test';
    window.close();
  });
});

// const color = (x) => {
//   let color = `linear-gradient(90deg, rgb(117,252,117) ${x}%, rgb(214,214,214) ${x}%)`;
//   slider.style.background = color;
//   slider.value = x;
// };

chrome.runtime.sendMessage({ name: 'fetchWords' }, (response) => {
  switch (response?.number) {
    case 1:
      //red
      yellowFace.style.filter = 'grayscale(100%)';
      greenFace.style.filter = 'grayscale(100%)';

      slider.style.background = `linear-gradient(90deg, rgb(0,221,3), rgb(249,205,53), rgb(213,0,0)`;
      // slider.style.background = `linear-gradient(90deg, rgb(213,0,0), rgb(214,214,214) ${20}%)`;
      slider.value = 100;

      parraf.innerHTML = ` <p id="parraf">
      Este sitio <span>sí</span> contiene <span>sesgo de genero</span>
    </p>`;

      // chrome.browserAction.setIcon({ path: './assets/60x60/red-60x60.png' });
      chrome.runtime.sendMessage({ icon1: 'red' });
      break;
    case 2:
      //yellow
      redFace.style.filter = 'grayscale(100%)';
      greenFace.style.filter = 'grayscale(100%)';

      slider.style.background = `linear-gradient(90deg, rgb(0,221,3), rgb(249,205,53), rgb(214,214,214) ${50}%)`;
      slider.value = 50;

      parraf.innerHTML = ` <p id="parraf">
      Este sitio <span>puede</span> contener <span>sesgo de genero</span>
    </p>`;
      chrome.runtime.sendMessage({ icon1: 'yellow' });
      break;
    case 3:
      //green
      redFace.style.filter = 'grayscale(100%)';
      yellowFace.style.filter = 'grayscale(100%)';

      // slider.style.background = `linear-gradient(90deg, rgb(213,0,0), rgb(249,205,53), rgb(0,221,3)`;
      slider.style.background = `linear-gradient(90deg, rgb(0,221,3), rgb(214,214,214) ${20}%)`;
      slider.value = 20;

      parraf.innerHTML = ` <p id="parraf">
      Este sitio <span>no</span> contiene <span>sesgo de genero</span>
    </p>`;
      chrome.runtime.sendMessage({ icon1: 'green' });
      break;

    default:
      break;
  }
});
