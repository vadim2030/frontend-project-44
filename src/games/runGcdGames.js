import getRandomInRange from '../getRandomInRange.js';

const runGcdGames = () => {
  const firstNum = getRandomInRange(1, 50);
  const secondNum = getRandomInRange(1, 50);
  const minNum = Math.min(firstNum, secondNum);
  console.log(`Question: ${firstNum} ${secondNum}`);
  let result;
  for (let i = minNum; i >= 1; i -= 1) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      result = String(i);
      break;
    }
  }
  return result;
};

export default runGcdGames;
