import getRandomInRange from '../getRandomInRange.js';
import runEngineGame from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

const primeGame = () => {
  const firstNum = getRandomInRange();
  const question = `Question: ${firstNum}`;
  const answer = isPrime(firstNum) ? 'yes' : 'no';
  return [question, answer];
};

const runPrimeGame = () => runEngineGame(primeGame, 'Answer "yes" if given number is prime. Otherwise answer "no".');

export default runPrimeGame;
