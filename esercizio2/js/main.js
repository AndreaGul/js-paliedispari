'use strict';

// ESERCIZIO 2
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// definisco una variabile con un prompt che chiede all'utente di scegliere tra pari o dispari

let PDUtente;

//Effettuo un controllo per vedere se l'utente inserisce la parola pari o dispari, utilizzando come condizione nel while che la parola non deve essere diversa dalla parola 'pari' o da 'dispari' quando verrà inserita una delle due parole pari o dispari il ciclo si interromperà.
while (PDUtente !== 'pari' && PDUtente !== 'dispari') {
  PDUtente = prompt('inserisci pari o dispari').toLowerCase();
}

console.log("La scelta tra pari e dispari dell'utente è =", PDUtente);

// definisco un ulteriore varibile con propt che chiedere all'utente di inserire un numero da 1 a 5

let numUtente = 0;

//E verifico se il numero inserito e compreso tra 1 e 5 con un while che ha come condizione che il numero dell'utente deve non essere minore di 1 o maggiore di 5.
while (numUtente < 1 || numUtente > 5) {
  numUtente = +prompt('inserisci un numero da 1 a 5');
}
console.log("Numero inserito dall'utene =", numUtente);

// (Nella funzione numero random)

function numRandom() {
  // Dichiaro una variabile e la definisco con un numero a caso da 1 a 5 compresi 1 e 5 grazie al metodo math.random.
  const numRandom = +Math.floor(Math.random() * 5) + 1;
  // E ritorno il valore della variabile
  return numRandom;
}

// il contenuto ritornato della funzione lo salvo in una variabile.

const numComputer = numRandom();
console.log('Numero generato per il computer =', numComputer);

// Dichiaro una variabile e la definisco come la somma del numero inserire dall'utente e il numero che viene ritornato dalla funzione.
const sumNum = numUtente + numComputer;

// Inserisco il valore della somma come valore che la funzione deve controllare.

// (Nella funzione pari o dispari.)

function pariODispari(number) {
  // Metto una condizione che controlla se il resto del numero inserito nel valore richiesto dalla funzione diviso 2 è 0 allora ritorna pari.
  if (number % 2 === 0) {
    return 'pari';
  }
  // altrimenti dispari
  return 'dispari';
}

//Definisco una variabile con il valore di ritorno della funzione pari o dispari.

const risulatatoPOD = `Data la somma dei numeri, ${sumNum} è ${pariODispari(
  sumNum
)}`;

console.log(risulatatoPOD);

// Tramite una condizione controllo.

// Se il valore scelto dall'utente è uguale al valore della variabile di ritorno della funzione pari o dispari allora stampa in console ha vinto l'utente.

if (PDUtente === pariODispari(sumNum)) {
  console.log("Ha vinto l'utente");
}
// Altrimenti stampa ha vinto il computer.
else {
  console.log('Ha vinto il computer');
}
