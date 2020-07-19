document.addEventListener('DOMContentLoaded', function() {

  const colorBtn = document.querySelector('.color-btn');
  const colorBacgr = document.querySelector('body');

  const colors = ['#1976D2', '#2196F3', '#0097A7', '#009688', '#388E3C', '#8BC34A', '#FFEB3B', '#FFECB3', '#FFA000', '#FF5722', '#616161', '#FF5252','#FF5252','#7C4DFF','#FDD09F','#FF6C4F','#3E4E43','#513e5c','#604BD8','#FFE373'];


  colorBtn.addEventListener('click', changeBackground);

  function changeBackground() {
    let random = Math.floor(Math.random() * colors.length);
    colorBacgr.style.backgroundColor = colors[random];
  };

});