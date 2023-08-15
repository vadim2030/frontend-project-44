/* eslint-disable consistent-return */
import runEngineGame from '../index.js';
import getRandomInRange from '../utils.js';

const rule = 'What is the result of the expression?';

const signs = ['+', '*', '-'];

const getSignRandom = () => signs[getRandomInRange(0, signs.length - 1)];

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

const getRoundData = () => {
  const [firstNum, secondNum] = getNumbers();
  const signRandom = getSignRandom();
  const questionStart = `${firstNum} ${signRandom} ${secondNum}`;
  const question = `Question: ${questionStart}`;
  const answer = String(runCalculator(firstNum, secondNum, signRandom));
  return [question, answer];
};

const runCalcGame = () => runEngineGame(getRoundData, rule);

export default runCalcGame;
