import readlineSync from 'readline-sync';
// import getRandomInRange from '../getRandomInRange.js';
import runEvenGame from './games/runEvenGame.js';

const runEngineGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(rule);
  const cycle = 3;
  for (let i = 0; i < cycle; i += 1) {
    const correctAnswer = runEvenGame();
    const yourAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === yourAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runEngineGame;
