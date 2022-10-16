const slider = document.getElementById('myRange');
const bton = document.getElementById('buttonOk');
const redFace = document.getElementById('redFace');
const yellowFace = document.getElementById('yellowFace');
const greenFace = document.getElementById('greenFace');
const parraf = document.getElementById('parraf');

document.addEventListener('DOMContentLoaded', function () {
  bton.addEventListener('click', function () {
    window.close();
  });
});

chrome.runtime.sendMessage({ name: 'fetchWords' }, (response) => {
  parraf.innerHTML = JSON.stringify(response);

  if (response.number < 0.3) {
    //green
    redFace.style.filter = 'grayscale(100%)';
    yellowFace.style.filter = 'grayscale(100%)';
    slider.style.background = `linear-gradient(90deg, rgb(0,221,3), rgb(214,214,214) ${20}%)`;
    slider.value = 20;
    parraf.innerHTML = ` <p id="parraf">
      Este sitio <span>no</span> contiene <span>sesgo de genero</span>
    </p>`;
    chrome.runtime.sendMessage({ icon1: 'green' });
    return;
  }

  if (response.number >= 0.3 && response.number <= 0.7) {
    //yellow
    redFace.style.filter = 'grayscale(100%)';
    greenFace.style.filter = 'grayscale(100%)';
    slider.style.background = `linear-gradient(90deg, rgb(0,221,3), rgb(249,205,53), rgb(214,214,214) ${50}%)`;
    slider.value = 50;
    parraf.innerHTML = ` <p id="parraf">
      Este sitio <span>puede</span> contener <span>sesgo de genero</span>
    </p>`;
    chrome.runtime.sendMessage({ icon1: 'yellow' });
    return;
  }

  if (response.number > 0.7) {
    //red
    yellowFace.style.filter = 'grayscale(100%)';
    greenFace.style.filter = 'grayscale(100%)';
    slider.style.background = `linear-gradient(90deg, rgb(0,221,3), rgb(249,205,53), rgb(213,0,0)`;
    slider.value = 100;
    parraf.innerHTML = ` <p id="parraf">
   Este sitio <span>sí</span> contiene <span>sesgo de genero</span>
 </p>`;
    chrome.runtime.sendMessage({ icon1: 'red' });
  }
});
