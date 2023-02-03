//3
const highNumber = 100;
const lowNumber = 1;

const randomNumber =
  Math.floor(Math.random() * (highNumber - lowNumber + 1)) + lowNumber;
console.log(randomNumber);

const body = document.querySelector(".textBody");
body.textContent =
  "We have selected a random number between " +
  lowNumber +
  " and " +
  highNumber +
  ". See if you can guess it in 10 turns or fewer. We'll tell you if your guess was too high or too low.";

const numbers = document.querySelector(".numbers");
const times = document.querySelector(".times");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

const startTime = Date.now();

// const checkGuess = () => {
//   const userGuess = Number(guessField.value);
//   if (guessCount === 1) {
//     guesses.textContent = "Previous guesses: ";
//   }
//   guesses.textContent += `${userGuess} ` + ", ";

//   if (userGuess === randomNumber) {
//     const endTime = Date.now();
//     const time = (endTime - startTime) / 1000;

//     lastResult.textContent =
//       "Congratulations! You got it right! Your time was " +
//       time +
//       " seconds. You guessed " +
//       guessCount +
//       " times.";

//     lastResult.style.backgroundColor = "#81B29A";
//     lowOrHi.textContent = "";
//     setGameOver();
//   } else if (guessCount === 10) {
//     lastResult.textContent = "!!!GAME OVER!!!";
//     lowOrHi.textContent = "";
//     setGameOver();
//   } else {
//     lastResult.textContent = "Wrong!";
//     lastResult.style.backgroundColor = "#E07A5F";
//     if (userGuess < randomNumber) {
//       lowOrHi.textContent = "Last guess was too low!";
//     } else if (userGuess > randomNumber) {
//       lowOrHi.textContent = "Last guess was too high!";
//     }
//   }

//   guessCount++;
//   guessField.value = "";
//   guessField.focus();
// };

// guessSubmit.addEventListener("click", checkGuess);
// const setGameOver = () => {
//   guessField.disabled = true;
//   guessSubmit.disabled = true;
//   resetButton = document.createElement("button");
//   resetButton.textContent = "Start new game";
//   document.body.append(resetButton);
//   resetButton.addEventListener("click", resetGame);
// };

// const resetGame = () => {
//   guessCount = 1;

//   const resetParas = document.querySelectorAll(".resultParas p");
//   for (const resetPara of resetParas) {
//     resetPara.textContent = "";
//   }

//   resetButton.parentNode.removeChild(resetButton);

//   guessField.disabled = false;
//   guessSubmit.disabled = false;
//   guessField.value = "";
//   guessField.focus();

//   randomNumber = Math.floor(Math.random() * 100) + 1;
// };

// Week 2 Task 1
// Always pick a number that is middle of the lowest / highest number

const algGuess = (highNumber, lowNumber) => {
  //for guessing
  let highPos = highNumber;
  let lowPos = lowNumber;
  let timesGuessed = 0;
  let numbersGuessed = [];
  //for alg loop
  let runAlgTime = 10;
  let avrGuessCount = [];

  let guess = parseInt(Math.floor((lowPos + highPos) / 2));
  console.log(guess + " Ehdotus");

  //loop for how many time to run
  for (let i = 0; i < runAlgTime; i++) {
    //loop for guessing the number
    while (true) {
      if (guess === randomNumber) {
        numbersGuessed.push(guess);
        timesGuessed++;
        avrGuessCount.push(timesGuessed);
        // lastResult.textContent = "Congratulations! The code works!";
        // lastResult.style.backgroundColor = "#81B29A";
        // times.textContent = "Total time guessed: " + `${timesGuessed} `;
        // numbers.textContent += numbersGuessed;
        console.log("läpi");
        break;
      } else {
        lastResult.textContent = "Wrong";
        timesGuessed++;

        if (guess < randomNumber) {
          lowPos = guess;
        } else if (guess > randomNumber) {
          highPos = guess;
        }
      }
      numbersGuessed.push(guess);
      guess = parseInt(Math.floor((lowPos + highPos) / 2));
      console.log(guess + " rere");
    }

    //reset numbers
    highPos = highNumber;
    lowPos = lowNumber;
    timesGuessed = 0;
    numbersGuessed = [];
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  }

  lastResult.textContent = "Congratulations! The code works!";
  lastResult.style.backgroundColor = "#81B29A";
  times.textContent = "Total time guessed: " + `${timesGuessed} `;
  numbers.textContent += numbersGuessed;
};

console.log(algGuess(highNumber, lowNumber));
