let a = 0;

// Funzioni per incrementare e decrementare
function incrementFunction() {
  a++;
  title.innerHTML = a;
}

function decrementFunction() {
  a--;
  title.innerHTML = a;
}

// Crea dinamicamente il contenuto della div 'counter'
const counterDiv = document.querySelector('.counter');

// Crea il titolo "Counter App"
const titleElement = document.createElement('p');
titleElement.textContent = "Counter App";
counterDiv.appendChild(titleElement);

// Crea l'elemento h1 per visualizzare il valore del contatore
const title = document.createElement('h1');
title.textContent = a;
counterDiv.appendChild(title);

// Crea il div per i pulsanti
const buttonsDiv = document.createElement('div');
buttonsDiv.classList.add('pulsanti');
counterDiv.appendChild(buttonsDiv);

// Crea il pulsante Increment
const incrementButton = document.createElement('button');
incrementButton.textContent = "Increment";
incrementButton.classList.add('btn', 'increment');
buttonsDiv.appendChild(incrementButton);

// Crea il pulsante Decrement
const decrementButton = document.createElement('button');
decrementButton.textContent = "Decrement";
decrementButton.classList.add('btn', 'decrement');
buttonsDiv.appendChild(decrementButton);

// Aggiungi gli event listener per i pulsanti
incrementButton.addEventListener('click', incrementFunction);
decrementButton.addEventListener('click', decrementFunction);

// Aggiungi la classe modificata al div counter
counterDiv.setAttribute('class', 'counter-modified');
