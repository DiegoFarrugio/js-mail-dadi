//Mail
//Chiedi all'utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull'esito del controllo.


//Chiedo all'utente la sua mail
let emailUtenteInput = document.getElementById('emailUtenteInput');
console.log('emailUtenteInput', emailUtenteInput, typeof emailUtenteInput);



//Inserendo l'email, questa deve essere all'interno di una lista accessibile
const emailAccessUtent = [
    'gino@gmail.com',
    'pippo@gmail.com',
    'alessio@gmail.com',
    'diego@gmail.com',
    'michele@gmail.com',
    'giuseppe@gmail.com'
    ];
    
console.log(emailAccessUtent, typeof emailAccessUtent);
const myButton = document.getElementById('myButton');

//Creo funzione click
myButton.addEventListener('click', function(){

let emailUtenteInputValue = emailUtenteInput.value;
console.log('emailUtenteInputValue', emailUtenteInputValue, typeof emailUtenteInputValue);

let messaggio = 'email errata';

for (let index = 0; index < emailAccessUtent.length; index++){


    if (emailUtenteInputValue == emailAccessUtent [index]){
        messaggio = 'email corretta';
    }

}

console.log(messaggio);
alert("" + messaggio);

})

/*
CREO IL MIO ARRAY, DOPODICHE' CREO SULL'HTML UN BOTTONE CHE VADO A COLLEGARE CON JAVA CON L'ELEMENT BY ID,

CREO UN EVENTO AL PASSAGGIO DEL CLICK SUL BOTTON PRENDENDOMI IL VALORE CHE L'UTENTE INSERISCE DENTRO L INPUT

PRIMA DEL CICLO IMPOSTO CREO UNA VARIABILE E IMPOSTO UN MESSAGGIO ALL'EMAIL ERRATA
DOPO CREO IL FOR CHE CONTROLLERA' TUTTI GLI ELEMENTI DELL ARRAY E QUANDO L'EMAIL COMBACIA SOVRASCRIVO IL MESSAGGIO
CHE PRIMA AVEVO DATO COME EMAIL ERRATO, A CORRETTO.

A FINE CICLO STAMPO IL MESSAGGIO. SE HO TROVATO UN EMAIL STAMPERO' EMAIL CORRETTA (XK L'HO SOVRASCRITTO)
ALTRIMENTI EMAIL ERRATA PERCHE' NON SONO ENTRATO DENTRO L'IF.
*/ 