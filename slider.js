const slider = document.getElementById('myRange');
const bton = document.getElementById('buttonOk');
const redFace = document.getElementById('redFace');
const yellowFace = document.getElementById('yellowFace');
const greenFace = document.getElementById('greenFace');
const parraf = document.getElementById('parraf');
const containerFaces = document.getElementById('containerFaces');
const containerBar = document.getElementById('slideContainer');
const spinner = document.getElementById('spinner');

document.addEventListener('DOMContentLoaded', function () {
  bton.addEventListener('click', function () {
    window.close();
  });
});

chrome.runtime.sendMessage({ name: 'fetchWords' }, (response) => {
  parraf.innerHTML = JSON.stringify(response);

  if (response.word === 'Error') {
    parraf.innerHTML = response.desc;
    spinner.style.display = 'none';
    return;
  }

  if (response.number < 0.3) {
    //green
    redFace.src = './assets/icons/disable/g-60x60/redg-60x60.png';
    yellowFace.src = './assets/icons/disable/g-60x60/yellowg-60x60.png';
    slider.style.background = `linear-gradient(90deg, rgb(0,221,3), rgb(214,214,214) ${20}%)`;
    containerFaces.style.display = 'flex';
    containerBar.style.display = 'flex';
    spinner.style.display = 'none';
    slider.value = 20;
    parraf.innerHTML = ` <p id="parraf">
      Este sitio <span>no</span> contiene <span>sesgo de genero</span>
    </p>`;
    chrome.runtime.sendMessage({ icon1: 'green' });
    return;
  }

  if (response.number >= 0.3 && response.number <= 0.7) {
    //yellow
    redFace.src = './assets/icons/disable/g-60x60/redg-60x60.png';
    greenFace.src = './assets/icons/disable/g-60x60/greeng-60x60.png';
    slider.style.background = `linear-gradient(90deg, rgb(0,221,3), rgb(249,205,53), rgb(214,214,214) ${50}%)`;
    containerFaces.style.display = 'flex';
    containerBar.style.display = 'flex';
    spinner.style.display = 'none';
    slider.value = 50;
    parraf.innerHTML = ` <p id="parraf">
      Este sitio <span>puede</span> contener <span>sesgo de genero</span>
    </p>`;
    chrome.runtime.sendMessage({ icon1: 'yellow' });
    return;
  }

  if (response.number > 0.7) {
    //red
    greenFace.src = './assets/icons/disable/g-60x60/greeng-60x60.png';
    yellowFace.src = './assets/icons/disable/g-60x60/yellowg-60x60.png';
    slider.style.background = `linear-gradient(90deg, rgb(0,221,3), rgb(249,205,53), rgb(213,0,0)`;
    containerFaces.style.display = 'flex';
    containerBar.style.display = 'flex';
    spinner.style.display = 'none';
    slider.value = 100;
    parraf.innerHTML = ` <p id="parraf">
   Este sitio <span>sí</span> contiene <span>sesgo de genero</span>
 </p>`;
    chrome.runtime.sendMessage({ icon1: 'red' });
  }
});
