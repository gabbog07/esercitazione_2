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
    // Controllo del numero inserito
    if (userNumber > randomNumber) {
      console.log("Troppo grande!");
      attempts--;
    } else if (userNumber < randomNumber) {
      console.log("Troppo piccolo!");
      attempts--;
    } else {
      console.log("Bravo, hai vinto!");
    }

    if (attempts === 0){
      console.log("Hai perso!,  il numero era " + randomNumber);
    }
  } 
  
let attempts = 5;

let randomNumber = generateRandomNumber(1,100)
console.log(randomNumber)

let btn = document.querySelector("#guessBtn");
btn.addEventListener("click", handleClick);