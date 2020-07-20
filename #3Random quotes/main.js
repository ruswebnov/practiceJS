document.addEventListener('DOMContentLoaded', function () {

 const quotes = [
   {
     name: 'Stephen King',
     quote: 'Get busy living or get busy dying'
   },
   {
     name: 'Jonh F.Kennedy',
     quote: 'Let every nation know, whether it wishes us well or ill, that we shall pay any price, bear any burden, meet any hardship, support any friend, oppose any foe to assure the survival and the success of liberty.'
   },
   {
    name: 'J.R.R. Tolkien',
    quote: 'After all, I believe that legends and myths are largely made of truth, and indeed present aspects of it that can only be received in this mode; and long ago certain truths and modes of this kind were discovered and must always reappear.'
   },
   {
     name: 'Michael Moorcock',
     quote: 'Legends are best left as legends and attempts to make them real are rarely successful',
   },
   {
    name: 'Tim Tharp',
    quote: 'That s how it is with legends. The greater they sound, the more must ve got left out.',
  },
  {
    name: 'Victor Hugo',
    quote: 'History has its truth, and so has legend. Legendary truth is of another nature than historical truth. Legendary truth is invention whose result is reality. Furthermore, history and legend have the same goal; to depict eternal man beneath momentary man.',
  },
  {
    name: 'Mickey Mantle',
    quote: 'If I had known I was going to live this long, I d have taken better care of myself',
  },
  {
    name: 'Christine Feehan',
    quote: 'If you are a vampire, then a vampire is not the creature of the legends',
  },
  {
    name: 'Alan Lee',
    quote: 'I m drawn to characters who bear similarities to the protagonists in myths and legends.',
  },
  {
    name: 'Anthony T. Hincks',
    quote: 'Legends never die in our dreams. Because... They will always live within our hearts.',
  },
 ];


 const quoteBtn = document.querySelector('#quoteBtn');
 const quote = document.querySelector('#quote');
 const quoteAuthor = document.querySelector('#quoteAuthor');

 quoteBtn.addEventListener('click', getQuote);

 function getQuote() {
   let randomQoute = Math.floor(Math.random() * quotes.length);
   quote.innerHTML = quotes[randomQoute].quote;
   quoteAuthor.innerHTML = quotes[randomQoute].name;
 }
 
});