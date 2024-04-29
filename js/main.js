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



