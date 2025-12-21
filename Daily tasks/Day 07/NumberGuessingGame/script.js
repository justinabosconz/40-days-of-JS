function numberGuessGame() {
  let counter = 0;
  const computerChoice = Math.floor(Math.random() * 10) + 1;

  function playGame() {
    let userChoice = prompt("Enter a number between 1 to 10.");

    if (userChoice > computerChoice) {
      console.log("You entered a higher number. Try again.");
      counter++;
      playGame();
    } else if (userChoice < computerChoice) {
      console.log("You entered a lower number. Try again.");
      counter++;
      playGame();
    } else {
      counter++;
      console.log(
        `Yay, you guessed the correct number in ${counter} attempts.`
      );
    }
  }
  playGame();
}

numberGuessGame();
