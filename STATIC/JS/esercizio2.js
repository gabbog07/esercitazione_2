// Funzione per generare un numero casuale intero tra min e max
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per il sanitize dell'input
function sanitize(input) {
  return parseInt(input.trim());
}

function handleClick(event){
  userNumber = sanitize(document.querySelector("#guess").value);
  console.log(userNumber);

let attempts = 5;
let help;

    // Controllo del numero inserito
    if (userNumber > randomNumber) {
      help = document.querySelector("#help").innerHTML = "Troppo Grande"
      attempts--;
      attempts = document.querySelector("#tentativi").innerHTML = "Hai ancora " + (5-1) + " tentativi ";
    } else if (userNumber < randomNumber) {
      help = document.querySelector("#help").innerHTML = "Troppo piccolo"
      attempts--;
      attempts = document.querySelector("#tentativi").innerHTML = "Hai ancora " + (5-1) + " tentativi "; 
    } else {
      help =  document.querySelector("#help").innerHTML = "Hai vinto!";
      attempts--
      attempts = document.querySelector("#tentativi").innerHTML = "Hai ancora " + (5-1) + " tentativi ";
      let win = document.querySelector("#win").innerHTML = "Hai impiegato" + attempts + " tentativi "
    }

    if (attempts === 0){
      help = document.querySelector("#help").innerHTML = "Hai perso, il numero era" +  randomNumber
    }
  } 
  

let randomNumber = generateRandomNumber(1,100)
console.log(randomNumber)

let btn = document.querySelector("#guessBtn");
btn.addEventListener("click", handleClick);