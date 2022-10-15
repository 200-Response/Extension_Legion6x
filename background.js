function getRandomNumber(number) {
  let max = number + 1;
  return Math.floor(Math.random() * Math.floor(max));
}

function getColor(str) {
  if (str === 'red') return './assets/60x60/red-60x60.png';
  if (str === 'yellow') return './assets/60x60/yellow-60x60.png';
  if (str === 'green') return './assets/60x60/green-60x60.png';
}
//test
// test

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.name === 'fetchWords') {
    const pokem = [
      'bulbasaur',
      'squirtle',
      'pidgey',
      'ekans',
      'nidorina',
      'ninetales',
      'psyduck',
    ];

    const number = getRandomNumber(3);

    let name = pokem[number];

    const apiCall = 'https://pokeapi.co/api/v2/pokemon/' + name;
    console.log('api', apiCall);

    fetch(apiCall)
      .then(function (res) {
        if (res.status !== 200) {
          response({ word: 'Error', desc: 'Problema al cargar el api2' });
          return;
        }
        res.json().then(function (data) {
          response({ word: data, number });
        });
      })
      .catch(function (err) {
        response({ word: 'Error', desc: 'Problema al cargar el api1' });
      });

    // response({ api: apiCall, nombre: name });
  }
  return true;
});

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.name === 'fetchWords') {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url;
      console.log('url', encodeURIComponent(url));
      // use `url` here inside the callback because it's asynchronous!
    });
  }

  if (msg.icon1) {
    chrome.tabs.query(
      { active: true, windowType: 'normal', currentWindow: true },
      function (d) {
        var tabId = d[0].id;
        chrome.action.setIcon({
          path: getColor(msg.icon1),
          tabId: tabId,
        });
      }
    );
  }
  return true;
});

console.log('working?');
