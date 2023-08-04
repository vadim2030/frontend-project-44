import getRandomInRange from '../getRandomInRange.js';

const getAnswer2 = (x, y) => {
  if (x === 0 || y === 0) return x + y;
  return x > y ? getAnswer2(x % y, y) : getAnswer2(x, y % x);
};

const runGcdGames = () => {
  const firstNum = getRandomInRange(1, 50);
  const secondNum = getRandomInRange(1, 50);
  console.log(`Question: ${firstNum} ${secondNum}`);
  const trueAnswer = getAnswer2(firstNum, secondNum);
  return String(trueAnswer);
};

export default runGcdGames;
