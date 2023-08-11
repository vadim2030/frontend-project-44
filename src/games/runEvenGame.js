import getRandomInRange from '../getRandomInRange.js';
import runEngineGame from '../index.js';

const isNumberEven = (number) => number % 2 === 0;
const evenGame = () => {
  const number = getRandomInRange();
  const question = `Question: ${number}`;
  const answer = isNumberEven(number) ? 'yes' : 'no';
  return [question, answer];
};

const runEvenGame = () => runEngineGame(evenGame, 'Answer "yes" if the number is even, otherwise answer "no".');

export default runEvenGame;
