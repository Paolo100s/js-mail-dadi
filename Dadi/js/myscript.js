// DADI

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// variabili globali
const playButton = document.getElementById("play");
let randomNumbUser, randomNumbPc, risultato;

// evento al button
playButton.addEventListener("click", myFunction)

// funzione al click
function myFunction () {

    // generazione numero user
    randomNumbUser = Math.floor (Math.random() * 6) + 1;
    console.log(randomNumbUser);

    // generazione numero pc
    randomNumbPc = Math.floor (Math.random() * 6) + 1;
    console.log(randomNumbPc);

    // numero uscito
    document.getElementById("NumUser").innerHTML = randomNumbUser
    document.getElementById("NumPc").innerHTML = randomNumbPc

    // condizioni
    if (randomNumbUser > randomNumbPc) {
        risultato = "YOU WIN!"
    }

    else if (randomNumbUser < randomNumbPc) {
        risultato = "YOU LOSE.."
    }

    else {
        risultato = "DRAW"
    }

    console.log(risultato);

    // output
    document.getElementById("end").innerHTML = risultato
}