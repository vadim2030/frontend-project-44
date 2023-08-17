import getRandomInRange from '../utils.js';
import runEngineGame from '../index.js';

const minNum = 1;
const maxNum = 50;
const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => {
  if (x === 0 || y === 0) return x + y;
  return x > y ? getGcd(x % y, y) : getGcd(x, y % x);
};

const getRoundData = () => {
  const firstNum = getRandomInRange(minNum, maxNum);
  const secondNum = getRandomInRange(minNum, maxNum);
  const question = `${firstNum} ${secondNum}`;
  const answer = String(getGcd(firstNum, secondNum));
  return [question, answer];
};

export default () => runEngineGame(getRoundData, rule);
