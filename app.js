// 1.computer choices
// 2. game
// 3. 5 rounds
// 4. player input
// 5. output and keep score
// 6. output winner ask to play again or not

let winsPlayer = 0;
let winsComputer = 0;
const btns = document.querySelectorAll('.selection');

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
  console.log(typeof p1, p2);
  if ((p1 + 1) % p2 === 0) {
    console.log('You Lose the computer wins');
    winsComputer++;
  } else if (p1 === p2) {
    console.log('It is a tie!');
  } else {
    console.log('You win!!');
    winsPlayer++;
  }
};

for (const btn of btns) {
  btn.addEventListener('click', playRound);
}

// const game = () => {
//   console.log(
//     'Hi! lets play a game of rock paper scissors.'
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
