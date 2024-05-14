// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l'altro di verde. Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari e in verde i numeri pari. Bonus Se il primo numero 




const divEl = document.createElement('div');
divEl.id = 'First';

const divElTwo = document.createElement('div');
divElTwo.id = 'Second';

document.body.appendChild(divEl);
document.body.appendChild(divElTwo);
