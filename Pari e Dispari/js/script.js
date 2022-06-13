// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//numero utente
let pariDispari = prompt("scegli se pari o dispari")
let numeroUnoCinque = parseInt(prompt("inserisci un numero da 1 a 5"))

// Generiamo un numero random
const numberRandom = getRndInteger(1, 5);
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
  }
let numeroPC = numberRandom;

// Sommiamo
let sum = numeroPC +  numeroUnoCinque;
console.log(sum);
let sumEvent = false;
// paro o dispari
function risultato(sum) {
  return sum % 2 == 0;
}
if( sum % 2 === 0) {
	sumEvent === true;
}

