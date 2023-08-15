import getRandomInRange from '../utils.js';
import runEngineGame from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return true;
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

const getRoundData = () => {
  const firstNum = getRandomInRange();
  const question = `Question: ${firstNum}`;
  const answer = isPrime(firstNum) ? 'yes' : 'no';
  return [question, answer];
};

const runPrimeGame = () => runEngineGame(getRoundData, rule);

export default runPrimeGame;
