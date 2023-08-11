/* eslint-disable consistent-return */
import runEngineGame from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const minNum = 0;

const signs = ['+', '*', '-'];

const getSignRandom = () => signs[getRandomInRange(minNum, signs.length)];

const runCalculator = (num1, num2, operand) => {
  switch (operand) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown order state: '${operand}'!`);
  }
};

const getNumbers = () => [getRandomInRange(), getRandomInRange()].sort((a, b) => b - a);

const calcGame = () => {
  const [firstNum, secondNum] = getNumbers();
  const signRandom = getSignRandom();
  const questionStart = `${firstNum} ${signRandom} ${secondNum}`;
  const question = `Question: ${questionStart}`;
  const answer = String(runCalculator(firstNum, secondNum, signRandom));
  return [question, answer];
};

const runCalcGame = () => runEngineGame(calcGame, 'What is the result of the expression?');

export default runCalcGame;
