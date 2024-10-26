let randomNumber = generateRandomNumber(1, 100);
console.log(randomNumber);

let attempts = 5;

let btn = document.querySelector("#guessBtn");
btn.addEventListener("click", handleClick);

// Funzione per generare un numero casuale intero tra min e max
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per il sanitize dell'input
function sanitize(input) {
  const sanitized = parseInt(input.trim());
  return isNaN(sanitized) ? null : sanitized; // restituisce null se non è un numero valido
}

function handleClick(event) {
  let userNumber = sanitize(document.querySelector("#guess").value);
  
  // Verifica se l'input è valido
  if (userNumber === null) {
    document.querySelector("#help").innerHTML = "Per favore inserisci un numero valido.";
    return;
  }
  
  console.log(userNumber);

  let element = document.querySelector("#background");

  // Cambio colori a seconda dei tentativi rimanenti
  if (attempts === 4) {
    element.classList.remove("body-green");
    element.classList.add("body-yellow");
    btn.classList.remove("btn-green");
    btn.classList.add("btn-yellow");
  } else if (attempts === 2) {
    element.classList.remove("body-yellow");
    element.classList.add("body-red");
    btn.classList.remove("btn-yellow");
    btn.classList.add("btn-red");
  }

  // Controllo del numero inserito
  if (userNumber > randomNumber) {
    document.querySelector("#help").innerHTML = "Troppo Grande";
    attempts--;
  } else if (userNumber < randomNumber) {
    document.querySelector("#help").innerHTML = "Troppo piccolo";
    attempts--;
  } else {
    document.querySelector("#help").innerHTML = "Hai vinto!";
    document.querySelector("#win").innerHTML = "Hai impiegato " + (5 - attempts) + " tentativi";
    btn.disabled = true;
    setTimeout(() => location.reload(), 5000);
    return;
  }

  // Aggiornamento tentativi rimanenti
  document.querySelector("#tentativi").innerHTML = "Hai ancora " + attempts + " tentativi";

  // Controllo per esaurimento tentativi
  if (attempts === 0) {
    document.querySelector("#help").innerHTML = "Hai perso, il numero era " + randomNumber;
    btn.disabled = true;
    setTimeout(() => location.reload(), 5000);
  }
}
