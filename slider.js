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
  let color = `linear-gradient(90deg, rgb(117,252,117) ${x}%, rgb(214,214,214) ${x}%)`;
  slider.style.background = color;
});

document.addEventListener('DOMContentLoaded', function () {
  bton.addEventListener('click', function () {
    // link.innerHTML = 'test';
    window.close();
  });
});

const color = (x) => {
  let color = `linear-gradient(90deg, rgb(117,252,117) ${x}%, rgb(214,214,214) ${x}%)`;
  slider.style.background = color;
  slider.value = x;
};

chrome.runtime.sendMessage({ name: 'fetchWords' }, (response) => {
  switch (response?.number) {
    case 1:
      //red
      // bton.innerHTML = parraf;
      yellowFace.style.filter = 'grayscale(100%)';
      greenFace.style.filter = 'grayscale(100%)';
      color(20);
      parraf.innerHTML = ` <p id="parraf">
      Este sitio <span>sí</span> contiene <span>sesgo de genero</span>
    </p>`;
      break;
    case 2:
      //yellow
      // bton.innerHTML = '2';
      redFace.style.filter = 'grayscale(100%)';
      greenFace.style.filter = 'grayscale(100%)';
      color(50);
      parraf.innerHTML = ` <p id="parraf">
      Este sitio <span>puede</span> contener <span>sesgo de genero</span>
    </p>`;
      break;
    case 3:
      //green
      // bton.innerHTML = '3';
      redFace.style.filter = 'grayscale(100%)';
      yellowFace.style.filter = 'grayscale(100%)';
      color(100);
      parraf.innerHTML = ` <p id="parraf">
      Este sitio <span>no</span> contiene <span>sesgo de genero</span>
    </p>`;
      break;

    default:
      break;
  }
});
