// Consegna
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante :occhiolino:
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve…


function getRandomNum(min, max) { //funzione che genera un numero casuale dati i due estremi
    var minRnd = min;
    var maxRnd = max - minRnd + 1;
    var rnd1 = Math.floor(Math.random() * maxRnd) + minRnd; 
    return rnd1; 
}
function mineCheck (values, value) {  //funzione che controlla se gli elementi sono ripetuti nell'array
    var values = [];    
    while (values.includes(value)) {
    var value= getRandomNum(1, 100)
    }
}

function campoMinato() { //funzione dell'esercizio campo minato
    var mineField = [];
    var d = parseInt(prompt("Inserisci 0 per la modalità facile, 1 per la difficoltà standard, 2 per sfidare le sorti del destino."))
    switch(d) {
        case 0: 
            d = 100;
            break;
        case 1: 
            d = 80;
            break;
        case 2: 
            d = 50;
            break;
        default:
            console.log("Non scegliendo hai scelto la morte!")
            d = 100;    
        }

    for (i=0; i<16; i++) {
        var mine = getRandomNum(1, d);
        mineCheck(mineField, mine);
        mineField.push(mine);

    }
    console.log(mineField);
    var userValues = [];
    var userScore = 0;
    var r = d - mineField.length;
    for (i=0; i<r; i++) {
        var value = parseInt(prompt("Inserisci un numero compreso tra 1 e " + d));
        if (mineField.includes(value)) {
            console.log("Hai perso! Il tuo punteggio è ", userScore);
            break;
        } else {
            userValues.push(value);
            userScore = userValues.length + 1;
        }
    }
    console.log(userValues, userScore);
}


var button = document.getElementById('startButton');
    button.addEventListener('click', function(){
        campoMinato();
    } )