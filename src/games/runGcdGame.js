import getRandomInRange from '../getRandomInRange.js';

const getAnswer = (x, y) => {
  if (x === 0 || y === 0) return x + y;
  return x > y ? getAnswer(x % y, y) : getAnswer(x, y % x);
};

const runGcdGames = () => {
  const firstNum = getRandomInRange(1, 50);
  const secondNum = getRandomInRange(1, 50);
  console.log(`Question: ${firstNum} ${secondNum}`);
  const trueAnswer = getAnswer(firstNum, secondNum);
  return String(trueAnswer);
};

export default runGcdGames;
