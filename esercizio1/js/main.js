// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// dichiaro una variabile che prende come valore una parola tramite un prompt
const parolaUtente = prompt('Inserisci una parola');

//dichiaro una funzione che riceve come  argomento una parola

function palindroma(parola) {
  // Metto una condizione dove se parola è not not a number ossia un numero deve ritornare non hai inserito una parola.
  if (!isNaN(parola)) {
    return console.log('Non hai inserito una parola');
  }
  // Altrimenti si procederà come segue.
  // Per capire se una parola è palindroma devo scorrere le lettera della parola e vedere se specchiate sono uguali.

  // Nel for (istanzio due variabili i e j:i=0 e j uguale alla lunghezza della parola , i sarà minore della lunghezza della parola e j maggiore di 0, e l'operazione sara i++ e j--).

  for (
    let i = 0, j = parola.length - 1;
    i < parola.length - 1, j > 0;
    i++, j--
  ) {
    // Nel ciclo inplementero una condizione dove Se parola[i] (la lettera della parola in posizzione i) è diversa da parola[j] (la lettera in posizione j) ritornero dalla funzione la parola non è palindroma.
    if (parola[i] !== parola[j]) {
      return console.log('La parola inserita non è palindroma');
    }
  }
  // Altrimenti fuori dal ciclo stampero la parola è palindroma.
  return console.log('La parola inserita è palindroma');
}

// richiamo una funzione che riceve come argomento la parolaUtente
palindroma(parolaUtente);
