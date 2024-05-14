
// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

let userN = Number.parseInt(prompt("Inserisci un numero") , 10);
for ( let i = 1 ; i < userN + 1  ; i++){
    const newArray= [];
    for(let i = 0 ; i < 10 ; i ++){
        newArray.push(Math.floor(Math.random() * 101));
    }
    console.log(newArray)
}