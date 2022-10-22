const slider = document.getElementById('myRange');
const bton = document.getElementById('buttonOk');
const redFace = document.getElementById('redFace');
const yellowFace = document.getElementById('yellowFace');
const greenFace = document.getElementById('greenFace');
const parraf = document.getElementById('parraf');
const containerFaces = document.getElementById('containerFaces');
const containerBar = document.getElementById('slideContainer');
const spinner = document.getElementById('spinner');
const senta = document.getElementById('senta');

document.addEventListener('DOMContentLoaded', function () {
  bton.addEventListener('click', function () {
    window.close();
  });
});

chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  chrome.runtime.sendMessage({ name: 'fetchWords' }, (response) => {
    parraf.innerHTML = JSON.stringify(response);

    if (response.word === 'Error') {
      parraf.innerHTML = response.desc;
      spinner.style.display = 'none';
      return;
    }

    port = chrome.tabs.connect(tabs[0].id, { name: 'channelName' });
    port.postMessage({ url: { url: tabs[0].url, data: response } });

    // {"data":{"result":0.7132570743560791}}

    if (response.data.result < 0.3) {
      //green
      redFace.src = './assets/icons/disable/g-60x60/redg-60x60.png';
      yellowFace.src = './assets/icons/disable/g-60x60/yellowg-60x60.png';
      slider.style.background = `linear-gradient(90deg, rgb(0,221,3), rgb(214,214,214) ${Math.round(
        response.data.result * 100
      )}%)`;
      containerFaces.style.display = 'flex';
      containerBar.style.display = 'flex';
      spinner.style.display = 'none';
      slider.value = Math.round(response.data.result * 100);
      parraf.innerHTML = ` <p id="parraf">
        Este sitio <span>no</span> contiene <span>sesgo de genero</span>
      </p>`;
      chrome.runtime.sendMessage({ icon1: 'green' });
      senta.innerHTML = `Esta página contiene un porcentaje de sesgo <span>${Math.round(
        response.data.result * 100
      )}% </span>`;
      return;
    }

    if (response.data.result >= 0.3 && response.data.result <= 0.7) {
      //yellow
      redFace.src = './assets/icons/disable/g-60x60/redg-60x60.png';
      greenFace.src = './assets/icons/disable/g-60x60/greeng-60x60.png';
      slider.style.background = `linear-gradient(90deg, rgb(0,221,3), rgb(249,205,53), rgb(214,214,214) ${Math.round(
        response.data.result * 100
      )}%)`;
      containerFaces.style.display = 'flex';
      containerBar.style.display = 'flex';
      spinner.style.display = 'none';
      slider.value = Math.round(response.data.result * 100);
      parraf.innerHTML = ` <p id="parraf">
        Este sitio <span>puede</span> contener <span>sesgo de genero</span>
      </p>`;
      chrome.runtime.sendMessage({ icon1: 'yellow' });
      senta.innerHTML = `Esta página contiene un porcentaje de sesgo <span>${Math.round(
        response.data.result * 100
      )}% </span>`;
      return;
    }

    if (response.data.result > 0.7) {
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
      senta.innerHTML = `Esta página contiene un porcentaje de sesgo <span>${Math.round(
        response.data.result * 100
      )}% </span>`;
    }
  });
});
