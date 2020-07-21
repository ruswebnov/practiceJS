document.addEventListener('DOMContentLoaded', function () {

 const btn = document.querySelector('#btn');
 const inputText = document.querySelector('#messageIn');
 const outputText = document.querySelector('#messageOut');

 btn.addEventListener('click', addText);

 function addText() {
   let input = inputText.value;
   if (input === ''){
     alert('Enter Valid Value!')
   }
   outputText.innerHTML = input;
 }
 
});