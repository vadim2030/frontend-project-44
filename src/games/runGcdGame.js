import getRandomInRange from '../getRandomInRange.js';
import runEngineGame from '../index.js';

const minNum = 1;
const maxNum = 50;

const getAnswer = (x, y) => {
  if (x === 0 || y === 0) return x + y;
  return x > y ? getAnswer(x % y, y) : getAnswer(x, y % x);
};

const gcdGame = () => {
  const firstNum = getRandomInRange(minNum, maxNum);
  const secondNum = getRandomInRange(minNum, maxNum);
  const question = `Question: ${firstNum} ${secondNum}`;
  const answer = String(getAnswer(firstNum, secondNum));
  return [question, answer];
};

const runGcdGame = () => runEngineGame(gcdGame, 'Find the greatest common divisor of given numbers.');

export default runGcdGame;
