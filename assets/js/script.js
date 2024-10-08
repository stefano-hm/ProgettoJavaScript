let a = 0;
     
function incrementFunction() {
  a++;
  title.innerHTML = a;
  }

function decrementFunction() {
  a--;
  title.innerHTML = a;
  }

const incrementButton = document.querySelector('.increment');
const decrementButton = document.querySelector('.decrement');
const title = document.querySelector('h1');
const counterDiv = document.querySelector('.counter');

incrementButton.addEventListener('click', incrementFunction);
decrementButton.addEventListener('click', decrementFunction);

counterDiv.setAttribute('class', 'counter-modified');
