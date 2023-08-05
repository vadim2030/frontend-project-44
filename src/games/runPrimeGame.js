import getRandomInRange from '../getRandomInRange.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

const runPrimeGame = () => {
  const firstNum = getRandomInRange();
  console.log(`Question: ${firstNum}`);
  return isPrime(firstNum) ? 'yes' : 'no';
};

export default runPrimeGame;
