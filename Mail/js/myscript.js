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
    let userMail = document.getElementById("inputmail").value;
    console.log(userMail);

    // ciclo
    for (let i = 0; i < mailConsentite.length; i++) {
        console.log(mailConsentite);

        // condizione presenza
        if (userMail == mailConsentite[i]) {
            esito = "positivo";
        }
    }

    // condizioni esito
    if (esito === "positivo") {
        messaggioOutput = "Accesso consentito.";
    }

    else if (esito != "positivo") {
        messaggioOutput = "Accesso negato."
    }

    // output
    console.log(messaggioOutput);

    document.getElementById("utente").innerHTML = messaggioOutput

}

