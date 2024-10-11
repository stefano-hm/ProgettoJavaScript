let a = 0;

function incrementFunction() {
  a++;
  title.innerHTML = a;
}

function decrementFunction() {
  a--;
  title.innerHTML = a;
}

const counterDiv = document.querySelector('.counter');

const titleElement = document.createElement('p');
titleElement.textContent = "Counter App";
counterDiv.appendChild(titleElement);

const title = document.createElement('h1');
title.textContent = a;
counterDiv.appendChild(title);

const buttonsDiv = document.createElement('div');
buttonsDiv.classList.add('pulsanti');
counterDiv.appendChild(buttonsDiv);

const incrementButton = document.createElement('button');
incrementButton.textContent = "Increment";
incrementButton.classList.add('btn', 'increment');
buttonsDiv.appendChild(incrementButton);

const decrementButton = document.createElement('button');
decrementButton.textContent = "Decrement";
decrementButton.classList.add('btn', 'decrement');
buttonsDiv.appendChild(decrementButton);

incrementButton.addEventListener('click', incrementFunction);
decrementButton.addEventListener('click', decrementFunction);

counterDiv.setAttribute('class', 'counter-modified');
