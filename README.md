# Progetto JavaScript
Questo repository contiene il progetto start2impact relativo al corso JavaScript, in particolare esso presenta un contatore con due pulsanti che incrementano o decrementano il valore mostrato a schermo.
## Indice
1. [Introduzione](#introduzione)
2. [Tecnologie Utilizzate](#tecnologie-utilizzate)
3. [Installazione](#installazione)
4. [Utilizzo](#utilizzo)
5. [Struttura e funzionamento del progetto](#struttura-e-funzionamento-del-progetto)
6. [Features](#features)
7. [Contribuzione](#contribuzione)
8. [Licenza](#licenza)
9. [Autore](#autore)
## Introduzione
Questo progetto è una semplice applicazione web che implementa un contatore dinamico. L'utente può incrementare o decrementare il valore visualizzato sullo schermo utilizzando due pulsanti. Il contatore parte da zero e si aggiorna automaticamente ogni volta che viene premuto uno dei pulsanti
## Tecnologie Utilizzate
HTML, JSS e JavaScript.
## Struttura e funzionamento del progetto
### Struttura
__HTML__: Il contatore è racchiuso in un elemento `div` con la classe `counter`, che contiene un paragrafo con il titolo, un elemento `h1` per visualizzare il valore corrente del contatore, e due pulsanti con le classi `increment` e `decrement`.
__CSS__: Lo stile dell'app è gestito tramite il file `styles.css`, che si trova nella cartella `assets/css`. Questo file contiene gli stili per il layout del contatore, il design dei pulsanti e la personalizzazione generale dell'interfaccia. Inoltre, il `div` del contatore utilizza una classe modificata tramite JavaScript (`counter-modified`) per applicare stili dinamici in base all'interazione dell'utente.
__JavaScript__: La logica dell'app è gestita tramite il file `script.js`, situato nella cartella `assets/js`, in particolare:
* Un contatore (`let a = 0;`) tiene traccia del valore corrente.
* Due funzioni, `incrementFunction()` e `decrementFunction()`, permettono rispettivamente di incrementare e decrementare il valore del contatore. Queste funzioni aggiornano l'elemento `<h1>` con il nuovo valore ogni volta che vengono chiamate.
* Gli eventi `click` sui pulsanti "Increment" e "Decrement" sono gestiti tramite `addEventListener`, collegando le funzioni agli eventi.
* Utilizzando `setAttribute`, la classe del `div` contenente il contatore viene modificata dinamicamente, permettendo la personalizzazione del layout durante l'interazione.
### Funzionamento
Quando l'utente interagisce con l'applicazione:

* __Increment__: Cliccando sul pulsante "Increment", il contatore aumenta di uno. La funzione `incrementFunction()` esegue questo aggiornamento.
* __Decrement__: Cliccando sul pulsante "Decrement", il contatore diminuisce di uno tramite la funzione `decrementFunction()`.
