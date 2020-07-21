document.addEventListener('DOMContentLoaded', function () {

 const lowerBtn = document.querySelector('.lower__btn');
 const addBtn = document.querySelector('.add__btn');
 const counter = document.querySelector('.count');
 const reset = document.querySelector('.reset');

 let count = 0;

 lowerBtn.addEventListener('click', lowerCount);
 addBtn.addEventListener('click', addCount);
 reset.addEventListener('click', resetBtn);

 function lowerCount() {
   count--;
   counter.innerHTML = count;
 }

 function addCount() {
   count++;
   counter.innerHTML = count;
 }


 function resetBtn() {
   count = 0
   counter.innerHTML = count;
 }
});