//Crea un array vuoto.Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array.

const array = [];

let userNumberA = Number.parseInt(prompt("Inserisci un numero intero") , 10);
let userNumberB = Number.parseInt(prompt("Inserisci un numero intero") , 10);
let userNumberC = Number.parseInt(prompt("Inserisci un numero intero") , 10);
let userNumberD = Number.parseInt(prompt("Inserisci un numero intero") , 10);
let userNumberE = Number.parseInt(prompt("Inserisci un numero intero") , 10);
let userNumberF = Number.parseInt(prompt("Inserisci un numero intero") , 10);

if (userNumberA % 2 === 1 ){
    array.push(userNumberA)
}  if (userNumberB % 2 === 1) {
    array.push(userNumberB)
}  if (userNumberC % 2 === 1) {
    array.push(userNumberC)
}  if (userNumberD % 2 === 1) {
    array.push(userNumberD)
}  if (userNumberE % 2 === 1) {
    array.push(userNumberE)
}  if (userNumberF % 2 === 1) {
    array.push(userNumberF)
}