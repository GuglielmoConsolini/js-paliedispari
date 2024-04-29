
// JS VERIFICA PAROLA PALINDROMA

let parolaInserita = prompt("Inserisci una parola:");

if (verificaPalindromo(parolaInserita)) {
    console.log("La parola inserita è palindroma.");
} else {
    console.log("La parola inserita non è palindroma.");
}

function verificaPalindromo(parolaInserita){

// lettera iniziale e finale della parola
let inizio = 0
let fine = parolaInserita.length - 1

 while (inizio < fine){

    //   se le lettere non combaciano la funzione è False
    if (parolaInserita[inizio] != parolaInserita[fine]){

        return false;
    }

//    contatore per avvicinare le lettere al centro    
    inizio++;
    fine--;
 }

 return true;

}


// JS PARI E DISPARI

function numeroCasuale() {
    return Math.floor(Math.random() * 5) + 1;
}

function sommaPariDispari(n1, n2) {
    let somma = n1 + n2;

    if (somma % 2 === 0){
        return "pari"
    }

    return "dispari"
}

let sceltaUtente = prompt("Scegli su cosa puntare: pari o dispari?");
console.log(`Hai scelto: ${sceltaUtente}`)

let numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"))
console.log(`Il tuo numero è: ${numeroUtente}`)

let numeroComputer = numeroCasuale()
console.log(`Il numero del computer è ${numeroComputer}`)

let risultato = sommaPariDispari(numeroComputer,numeroUtente )
console.log(`La somma è ${risultato}`)

if(risultato === sceltaUtente){
    console.log("Complimenti hai vinto")
} else{
    console.log("Mi dispiace, hai perso")
}




