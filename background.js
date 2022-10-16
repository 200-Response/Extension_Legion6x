function getColor(str) {
  if (str === 'red') return './assets/30x30/red-30x30.png';
  if (str === 'yellow') return './assets/30x30/yellow-30x30.png';
  if (str === 'green') return './assets/30x30/green-30x30.png';
}

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.name === 'fetchWords') {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url;
      console.log('url', encodeURIComponent(url));
      // use `url` here inside the callback because it's asynchronous!
      const apiCall = `https://fastapi-sesgo.herokuapp.com/${url}`;
      fetch(apiCall)
        .then(function (res) {
          if (res.status !== 200) {
            response({
              word: 'Error',
              desc: 'Error al conectar con el servidor',
            });
            return;
          }
          res.json().then(function (data) {
            response({ number: data.random });
            console.log('data', data);
          });
        })
        .catch(function (err) {
          response({
            word: 'Error',
            desc: 'Error al conectar con el servidor',
          });
        });
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
