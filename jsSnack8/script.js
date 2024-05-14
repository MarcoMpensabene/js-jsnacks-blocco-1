// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l'altro di verde. Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari e in verde i numeri pari. Bonus Se il primo numero 




const divEl = document.createElement('div');
divEl.id = 'First';

const divElTwo = document.createElement('div');
divElTwo.id = 'Second';

document.body.appendChild(divEl);
document.body.appendChild(divElTwo);

const numberList = [ 1 , 2 , 3 ,44 ,77 , 192 , 392 , 888 , 99 ];

for (let i = 0 ; i < numberList.length ; i++){
        const newEl = document.createElement("p")
        newEl.append(numberList[i])
    
    if(numberList[i] % 2 === 1){
        divEl.appendChild(newEl)
    } else {
        divElTwo.appendChild(newEl)
    }
}