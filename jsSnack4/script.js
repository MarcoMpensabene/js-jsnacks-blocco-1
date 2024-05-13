// * In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
const nameList = ["Giovanni" , "Ottavio" , "Frabriazio" , "Giuseppina" , "Alberto" , "Riccardo"];

let userName = prompt("Inserisci il tuo nome");

if (userName === nameList[0] || userName === nameList[1] || userName === nameList[2] || userName === nameList[3] || userName === nameList[4] || userName === nameList[5] ) {
    console.log("Puoi partecipare alla festa")
} else {
    console.log("vai a casa grazie :D ")
}