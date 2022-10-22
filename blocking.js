function svgIcon() {
  return `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">
<path style="fill:#FF757C;" d="M495.441,72.695L439.306,16.56c-8.498-8.498-22.278-8.498-30.777,0L271.389,153.7
   c-8.498,8.498-22.278,8.498-30.777,0L103.472,16.56c-8.498-8.498-22.278-8.498-30.777,0L16.56,72.695
   c-8.498,8.498-8.498,22.278,0,30.777l137.14,137.14c8.498,8.498,8.498,22.278,0,30.777L16.56,408.529
   c-8.498,8.498-8.498,22.278,0,30.777l56.136,56.136c8.498,8.498,22.278,8.498,30.777,0l137.14-137.14
   c8.498-8.498,22.278-8.498,30.777,0l137.14,137.14c8.498,8.498,22.278,8.498,30.777,0l56.136-56.136
   c8.498-8.498,8.498-22.278,0-30.777l-137.14-137.139c-8.498-8.498-8.498-22.278,0-30.777l137.14-137.14
   C503.941,94.974,503.941,81.194,495.441,72.695z"/>
<g>
   <path style="fill:#4D4D4D;" d="M88.084,511.999c-8.184,0-16.369-3.115-22.6-9.346L9.347,446.518
       c-12.462-12.462-12.462-32.739,0-45.201l137.14-137.14c4.508-4.508,4.508-11.843,0-16.351L9.347,110.685
       c-12.462-12.463-12.462-32.74,0-45.201L65.482,9.348c12.464-12.462,32.74-12.462,45.201,0l137.141,137.14
       c4.508,4.508,11.843,4.508,16.351,0l137.14-137.14c12.461-12.461,32.738-12.462,45.2,0l56.138,56.136
       c12.462,12.462,12.462,32.739,0,45.201l-137.14,137.14c-4.508,4.508-4.508,11.843,0,16.351l137.14,137.14
       c12.462,12.463,12.462,32.74,0,45.201l-56.136,56.136c-12.464,12.462-32.74,12.462-45.201,0l-137.141-137.14
       c-4.508-4.508-11.843-4.508-16.351,0l-137.14,137.14C104.454,508.884,96.268,511.999,88.084,511.999z M88.084,20.391
       c-2.961,0-5.922,1.127-8.177,3.381L23.772,79.908c-4.508,4.508-4.508,11.844,0,16.352l137.14,137.139
       c12.462,12.462,12.462,32.739,0,45.201l-137.14,137.14c-4.508,4.508-4.508,11.844,0,16.351l56.136,56.137
       c4.508,4.508,11.843,4.507,16.351,0l137.14-137.14c12.463-12.463,32.739-12.463,45.201,0l137.14,137.139
       c4.508,4.509,11.842,4.508,16.352,0l56.135-56.136c4.508-4.508,4.508-11.844,0-16.352L351.089,278.602
       c-12.462-12.462-12.462-32.739,0-45.201l137.14-137.14c4.508-4.508,4.508-11.844,0-16.351l0,0l-56.136-56.136
       c-4.509-4.507-11.844-4.507-16.351,0l-137.14,137.139c-12.463,12.463-32.739,12.463-45.201,0L96.259,23.772
       C94.005,21.518,91.045,20.391,88.084,20.391z"/>
   <path style="fill:#4D4D4D;" d="M88.935,473.447c-2.611,0-5.22-0.996-7.212-2.988c-3.983-3.983-3.983-10.442,0-14.426l82.476-82.475
       c3.984-3.983,10.441-3.983,14.426,0c3.983,3.983,3.983,10.442,0,14.426L96.148,470.46
       C94.155,472.452,91.545,473.447,88.935,473.447z"/>
   <path style="fill:#4D4D4D;" d="M195.201,367.181c-2.611,0-5.22-0.996-7.212-2.987c-3.983-3.983-3.983-10.442,0-14.426l6.873-6.873
       c3.984-3.983,10.44-3.983,14.426,0c3.983,3.983,3.983,10.442,0,14.426l-6.873,6.873
       C200.421,366.184,197.812,367.181,195.201,367.181z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>`;
}

function renderBody(img) {
  return `
  <div>
    <div class="barcontainer">
        <div class="bar">
            ${svgIcon()}
        </div>
    </div>
    <div class="mainDeican">

    <img src="${img}">
    <div class="container">
        <h1>Página Bloqueada</h1>
        <p>Esta página no está libre de sesgo de género y es considerada como inapropiada. Contacta a tu administrador para más detalles</p>
    </div>
    </div>
  </div>

  `;
}

chrome.runtime.onConnect.addListener(function (port) {
  if (port.name == 'channelName') {
    port.onMessage.addListener(function (response) {
      if (response.url.url == window.location.href) {
        if (response.url.data.data.result > 0.7) {
          const addCSS = (css) =>
            (document.head.appendChild(
              document.createElement('style')
            ).innerHTML = css);
          //red

          let filename = '/assets/icons/block/block-red-100x100.png';
          let file = filename;
          let url = chrome.runtime.getURL(file);

          document.body.innerHTML = renderBody(url);

          // Usage:
          addCSS(`
          body {
            background: white !important;
            display: flex !important;
            justify-content: center !important;
            
          }
          
          .mainDeican {
            color: black !important;
            width: 70vh !important;
            height: 50vh !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            gap: 30px !important;
            font-size: 13px !important;
          }

          .barcontainer{
              display: flex !important;
              justify-content: end !important;

          }
          
          .bar {
            width: 30px !important;
            height: 30px !important;
            padding-top: 10px;
           
          }
          `);
        }
      }
    });
  }
});
