// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//variabili in gioco
let scritUtente = prompt('inserire parola');
let parolaScritta = palindroma(scritUtente);

//funzione
function palindroma(parola) {
	if(parola === parola.split('').reverse().join('')){
		alert(scritUtente + " palindroma");
	}else{
		alert(scritUtente + " non palindroma");
	}
};