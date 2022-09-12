// 1.computer choices
// 2. game
// 3. 5 rounds
// 4. player input
// 5. output and keep score
// 6. output winner ask to play again or not

const getComputerChoice = () =>
  Math.floor(Math.random() * 3);
const getPlayerChoice = () =>
  prompt(
    'Type 0 for rock, 1 for paper, and 2 for scissors.'
  );
const playRound = () => {
  if ((playerChoice + 1) % computerChoice === 0) {
    console.log('You Lose the computer wins');
    winsComputer++;
  } else if (playerChoice === computerChoice) {
    console.log('It is a tie!');
  } else {
    console.log('You win!!');
    winsPlayer++;
  }
};

while (winsComputer < 5 || winsPlayer < 5) {
  const computerChoice = getComputerChoice();
  const playerChoice = getPlayerChoice();
  const winsPlayer = 0;
  const winsComputer = 0;
  console.log(
    `Hello the score is computer: ${computerChoice} to player: ${playerChoice}`
  );
  playRound();
}
