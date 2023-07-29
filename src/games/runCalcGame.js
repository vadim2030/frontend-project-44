import getRandomInRange from '../getRandomInRange.js';

const calculator = (num1, num2, operand) => {
  switch (operand) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default:
      return '';
  }
};

const getSignRandom = () => {
  const sin = ['+', '-', '*'];
  return sin[Math.floor(Math.random() * sin.length)];
};

const getNumbers = () => [getRandomInRange(), getRandomInRange()].sort((a, b) => b - a);

const runCalcGame = () => {
  const [firstNum, secondNum] = getNumbers();
  const signRandom = getSignRandom();
  const question = `${firstNum} ${signRandom} ${secondNum}`;
  console.log(`Question: ${question}`);
  return String(calculator(firstNum, secondNum, signRandom));
};

export default runCalcGame;
