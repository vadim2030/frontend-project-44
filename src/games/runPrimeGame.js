import getRandomInRange from '../utils.js';
import runEngineGame from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getRoundData = () => {
  const firstNum = getRandomInRange();
  const question = firstNum;
  let answer = 'no';
  if (isPrime(firstNum)) {
    answer = 'yes';
  }
  return [question, answer];
};

export default () => runEngineGame(getRoundData, rule);
