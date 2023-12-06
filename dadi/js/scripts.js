//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.
//Prima di partire a scrivere codice poniamoci qualche domanda:
//Che ci sia un array da qualche parte?
//Se dobbiamo confrontare qualcosa che "cosa" ci serve?



//CREO LE 2 VARIABILI COMPRENSIVE GIA' DEL CALCOLO DA 1 A 6 RANDOM
let giocatore = Math.floor(Math.random() * (6) ) + 1;
console.log('giocatore', giocatore, typeof giocatore);

let computer = Math.floor(Math.random() * (6) ) + 1;
console.log('computer', computer, typeof computer);


//DO IL COMANDO AL BOTTONE DA JAVA ALL'HTML
const myButton = document.getElementById('myButton');
console.log('myButton', myButton, typeof myButton);


//INDICO CHE IL BOTTONE DEVE AVERE UN EVENTO AL MOMENTO DEL CLICK
myButton.addEventListener('click', function(){

if(giocatore == computer){
    alert ('pareggio');
}

    else if(giocatore < computer){
    alert ('Computer, hai vinto!!')
    
}
    else {
        alert ('Giocatore, hai vinto!')
    }

})
