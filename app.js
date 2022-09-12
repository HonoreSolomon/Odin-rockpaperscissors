// 1.computer choices
// 2. game
// 3. 5 rounds
// 4. player input
// 5. output and keep score
// 6. output winner ask to play again or not

let winsPlayer = 0;
let winsComputer = 0;

const getComputerChoice = () =>
  Math.floor(Math.random() * 3);
const getPlayerChoice = () =>
  parseInt(
    prompt(
      'Type 0 for rock, 1 for paper, and 2 for scissors.'
    )
  );
const playRound = () => {
  const p1 = getPlayerChoice();
  const p2 = getComputerChoice();
  if ((p1 + 1) % p2 === 0) {
    console.log('You Lose the computer wins');
    return (winsComputer = winsComputer++);
  } else if (p1 === p2) {
    console.log('It is a tie!');
  } else {
    console.log('You win!!');
    return (winsPlayer = winsPlayer++);
  }
};

const game = () => {
  console.log(
    'Hi! lets play a game of rock paper scissors.'
  );

  while (winsComputer < 5 || winsPlayer < 5) {
    console.log(
      `Hello the score is computer: ${winsComputer} to player: ${winsPlayer}`
    );
    playRound(winsPlayer, winsComputer);
  }
  winsComputer === 5
    ? console.log(
        `The computer won and the score was ${winsComputer} to ${winsPlayer}`
      )
    : console.log(
        `You won!! and the score was ${winsComputer} to ${winsPlayer}`
      );
};
