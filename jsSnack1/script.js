// * L'utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

let numeroA = Number.parseInt(prompt("Inserisci un numero intero") , 10);
let numeroB = Number.parseInt(prompt("Inserisci un numero intero") , 10);


if (numeroA > numeroB) {
    console.log(numeroA)
} else {
    console.log(numeroB)
}