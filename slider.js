const slider = document.getElementById('myRange');
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
  let bton = document.getElementById('buttonOk');
  bton.addEventListener('click', function () {
    // link.innerHTML = 'test';
    window.close();
  });
});
