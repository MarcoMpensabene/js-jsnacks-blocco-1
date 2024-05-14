// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const intNumber = [ 1 , 2 , 3 , 4 , 5, 6 , 7 , 8, 9 , 10];
let somma = 0;
for(let i = 0 ; i < intNumber.length ; i++){
    console.log(intNumber[i]);
    if (i % 2 === 1){
        somma += intNumber[i];
    }
}console.log(somma);


