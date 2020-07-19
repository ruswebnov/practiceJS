document.addEventListener('DOMContentLoaded', function () {

  const hexNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  const bodyBacgr = document.querySelector('body');
  const hex = document.querySelector('.hex');
  const btnHex = document.querySelector('.hex-btn');

  btnHex.addEventListener('click', getHex);

  function getHex() {
    let colorHex = '#';

    for (i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * hexNumber.length);
      colorHex += hexNumber[random];
    }
    bodyBacgr.style.backgroundColor = colorHex;
    hex.innerHTML = colorHex;
  };

});