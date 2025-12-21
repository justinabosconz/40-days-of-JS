function rockPaperScissorsGame() {
  const randomNum = Math.floor(Math.random() * 3) + 1;

  const userChoice = prompt("Select rock, paper or scissors.");

  let computerChoice;
  switch (randomNum) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }
  computerChoice = computerChoice.toLowerCase();

  console.log(
    `The computer chose ${computerChoice}, and you chose ${userChoice}.`
  );

  if (
    (computerChoice == "rock" && userChoice == "paper") ||
    (computerChoice == "paper" && userChoice == "scissors") ||
    (computerChoice == "scissors" && userChoice == "rock")
  ) {
    console.log("You win.");
  } else if (computerChoice == userChoice) {
    console.log("It's a tie. Try again.");
  } else console.log("Computer wins.");

  const playAgain = prompt("Would you like to play again?");

  if (playAgain == "yes") {
    rockPaperScissorsGame();
  }
}

rockPaperScissorsGame();
