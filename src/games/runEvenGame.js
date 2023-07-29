import getRandomInRange from '../getRandomInRange.js';

const isNumberEven = (number) => number % 2 === 0;
const runEvenGame = () => {
  const number = getRandomInRange();
  console.log(`Question: ${number}`);
  return isNumberEven(number) ? 'yes' : 'no';
};

export default runEvenGame;
