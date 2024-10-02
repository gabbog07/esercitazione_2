// Funzione per generare un numero casuale intero tra min e max
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per il sanitize dell'input
function sanitize(input) {
  return parseInt(input.trim(), 10);
}

// Funzione per il gioco "Indovina il numero"
function guessTheNumber() {
  const randomNumber = generateRandomNumber(1, 100);
  let attempts = 5;

  console.log(
    "Benvenuto nel gioco 'Indovina il numero'! Hai 5 tentativi per indovinare un numero tra 1 e 100."
  );

  while (attempts > 0) {
    let userInput = prompt("Inserisci un numero tra 1 e 100:");

    // Sanitizza l'input (rimuove spazi e lo converte in numero intero)
    let userNumber = sanitize(userInput);

    if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
      console.log("Per favore, inserisci un numero valido tra 1 e 100.");
      continue; // Chiede di nuovo se l'input non è valido
    }

    // Controllo del numero inserito
    if (userNumber > randomNumber) {
      console.log("Troppo grande!");
    } else if (userNumber < randomNumber) {
      console.log("Troppo piccolo!");
    } else {
      console.log("Bravo, hai vinto!");
      return; // Fine del gioco se l'utente indovina
    }

    attempts--; // Riduce i tentativi
    console.log("Ti restano " + attempts + " tentativi.");
  }

  console.log(
    "Hai esaurito i tentativi! Il numero corretto era: " + randomNumber
  );
}

guessTheNumber();
