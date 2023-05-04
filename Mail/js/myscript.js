// MAIL

// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
// QUI ricordatevi che non è concesso usare altro oltre quello che abbiam visto oggi

// variabili globali
const mailConsentite = ["saraz@gmail.com", "franc22@gmail.com", "al-berto@gmail.com", "jhonny@gmail.com"];
const buttonCheck = document.getElementById("check");
let esito, messaggioOutput;

// evento al button
buttonCheck.addEventListener('click', checkFunction)

// funzione al check
function checkFunction() {
    
    // input utente
    let userMail = document.getElementById("input_mail").value;
    console.log(userMail);

    // ciclo
    for (i = 0; i < mailConsentite.length; i++)

    // condizione
    if (userMail == mailConsentite[i]) {
        esito = "accetta"
    }
    
    else {
        esito = "rifiuta"
    }


    // output
    if (esito == "accetta") {
        messaggioOutput = "Accesso consentito."
    }

    else if ( esito == "rifiuta") {
        messaggioOutput = "Mi dispiace, non puoi entrare."
    }

    console.log(messaggioOutput);

}