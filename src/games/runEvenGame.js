import getRandomInRange from '../utils.js';
import runEngineGame from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isNumberEven = (number) => number % 2 === 0;
const getRoundData = () => {
  const number = getRandomInRange();
  const question = number;
  const answer = isNumberEven(number) ? 'yes' : 'no';
  return [question, answer];
};

export default () => runEngineGame(getRoundData, rule);
