// 1.computer choices
// 2. game
// 3. 5 rounds
// 4. player input
// 5. output and keep score
// 6. output winner ask to play again or not

let winsPlayer = 0;
let winsComputer = 0;
const btns = document.querySelectorAll('.selection');
const result = document.querySelector('.result');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector(
  '.computerScore'
);
const playAgain = document.querySelector('.playAgain');
playerScore.textContent = `Player Score: ${winsPlayer}`;
computerScore.textContent = `Computer Score: ${winsComputer}`;

const getComputerChoice = () =>
  Math.floor(Math.random() * 3);
const getPlayerChoice = () =>
  parseInt(
    prompt(
      'Type 0 for rock, 1 for paper, and 2 for scissors.'
    )
  );
const playRound = function () {
  const p1 = parseInt(this.value);
  const p2 = getComputerChoice();
  if ((p1 + 1) % p2 === 0) {
    result.textContent = 'You Lose the computer wins';
    winsComputer++;
  } else if (p1 === p2) {
    result.textContent = 'It is a tie!';
  } else {
    result.textContent = 'You win!!';
    winsPlayer++;
  }
  playerScore.textContent = `Player Score: ${winsPlayer}`;
  computerScore.textContent = `Computer Score: ${winsComputer}`;
  declareWinner();
};

const declareWinner = () => {
  if (winsPlayer >= 5 || winsComputer >= 5) {
    for (const btn of btns) {
      btn.setAttribute('disabled', '');
      playAgain.style.zIndex = '1';
    }
    const result = document.querySelector('.result');
    winsPlayer > winsComputer
      ? (result.textContent = `You won!! and the score was ${winsComputer} to ${winsPlayer}`)
      : (result.textContent = `The computer won and the score was ${winsComputer} to ${winsPlayer}`);
  }
};
const resetGame = () => {
  playAgain.addEventListener('click', () =>
    window.location.reload()
  );
};

const game = () => {
  for (const btn of btns) {
    btn.addEventListener('click', playRound);
  }
  resetGame();
};

game();
// const game = () => {
//   console.log(
//     ''
//   );

//   for (let index = 0; index < 5; index++) {
//     console.log(
//       `Hello the score is computer: ${winsComputer} to player: ${winsPlayer}`
//     );
//     playRound();
//     if (winsComputer === 3 || winsPlayer === 3) {
//       winsComputer === 3
//         ? console.log(
//             `The computer won and the score was ${winsComputer} to ${winsPlayer}`
//           )
//         : console.log(
//             `You won!! and the score was ${winsComputer} to ${winsPlayer}`
//           );
//       break;
//     }
//   }
// };
