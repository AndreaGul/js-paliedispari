ESERCIZIO 1
Parole palindrome
Chiedere all'utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma.

Dichiaro una variabile che prende come valore una parola tramite un prompt.

Dichiaro una funzione con nome palindroma che riceve come argomento una parola.

Metto una condizione dove se parola è not not a number ossia un numero deve ritornare non hai inserito una parola.

Altrimenti si procederà come segue.
Per capire se una parola è palindroma devo scorrere le lettera della parola e vedere se specchiate sono uguali.

Nel for (istanzio due variabili i e j:i=0 e j uguale alla lunghezza della parola , i sarà minore della lunghezza della parola e j maggiore di 0, e l'operazione sara i++ e j--).

Nel ciclo inplementero una condizione dove Se parola[i] (la lettera della parola in posizzione i) è diversa da parola[j] (la lettera in posizione j) ritornero dalla funzione la parola non è palindroma.

Altrimenti fuori dal ciclo stampero la parola è palindroma.

Richiamo la funzione palindroma che riceve come argomento la parolaUtente.

ESERCIZIO 2
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

Definisco una variabile con un prompt che chiede all'utente di scegliere tra pari o dispari.

Effettuo un controllo per vedere se l'utente inserisce la parola pari o dispari, utilizzando come condizione nel while che la parola non deve essere diversa dalla parola 'pari' o da 'dispari' quando verrà inserita una delle due parole pari o dispari il ciclo si interromperà.

Definisco un ulteriore varibile con propt che chiedere alutente di inserire un numero da 1 a 5.

E verifico se il numero inserito e compreso tra 1 e 5 con un while che ha come condizione che il numero dell'utente deve non essere minore di 1 o maggiore di 5.

(nella funzione numero random)
dichiaro una variabile e la definisco con un numero a caso da 1 a 5 compresi 1 e 5 grazie al metodo math.random
e ritorno il valore della variabile

il contenuto ritornato della funzione lo salvo in una variabile

dichiaro una variabile e la definisco come la somma del numero inserire dall'utente e il numero che viene ritornato dalla funzione

inserisco il valore della somma come valore che la funzione deve controllare

(nella funzione pari o dispari)
metto una condizione che controlla se il resto del numero inserito nel valore richiesto dalla funzione diviso 2 è 0 ritorna pari
altrimenti dispari

definisco una variabile con il valore di ritorno della funzione pari o dispari

tramite una condizione controllo
se il valore scelto dall'utente è uguale al valore della variabile di ritorno della funzione pari o dispari allora stampa in console ha vinto l'utente
altrimenti stampa ha vinto il computer
