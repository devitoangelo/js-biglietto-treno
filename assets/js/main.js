//Chiediamo all'utente il numero di chilometri che vuole percorrere


let Distance = prompt  ( "Numero chilometri")
//Chiediamo all'utente l'età e salviamo 
let age = prompt  ("Inserisci la tua età")

console.log( Number(Distance), Number(age));

 // Prezzo definito in base ai km

 let Price = Distance * 0.21;


  // comparatore 
 if( age < 18){
    Price /= 20

 }else if (age > 65){

    Price /= 40
 } else {
    Price 

 }

 alert (Price);
 console.log(Price);
 


















