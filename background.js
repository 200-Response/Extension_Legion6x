function getRandomNumber(number) {
  let max = number + 1;
  return Math.floor(Math.random() * Math.floor(max));
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

console.log('working?');
