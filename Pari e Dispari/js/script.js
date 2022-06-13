// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//numero utente


//funzioni
// Generiamo un numero random
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
// paro o dispari
function isEven(sum) {
	//return sum % 2 == 0; 
	if (sum % 2 == 0){
		return 'pari';
	}else {
		return 'dispari'
	}
}
//************ */

let pariDispari = prompt("scegli se pari o dispari")
console.log('Pari o Dispari:', pariDispari);
let numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"))
console.log('Numero utente:', numeroUtente );
let numeroPC = getRndInteger(1, 5);
console.log('Numero PC', numeroPC);



// Sommiamo
let sum = numeroPC +  numeroUtente;
console.log('Somme numeri:', sum);

// pari risultato

if (isEven(sum) === pariDispari){
	alert('Hai vinto');
	
} else{
	alert('Hai perso');
}
