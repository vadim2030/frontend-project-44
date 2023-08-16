import getRandomInRange from '../utils.js';
import runEngineGame from '../index.js';

const minStepProg = 1;
const minProgLength = 5;
const maxNum = 10;
const rule = 'What number is missing in the progression?';

const getProgressionAndAnswer = (startNum, stepProg, progLength) => {
  const positionUnknown = getRandomInRange(1, progLength);
  const progression = [startNum];
  for (let i = 0; i <= progLength - 1; i += 1) {
    const lastNum = progression[progression.length - 1];
    progression.push(lastNum + stepProg);
  }
  const answers = progression[positionUnknown];
  progression[positionUnknown] = '..';
  return [progression.join(' '), String(answers)];
};

const getRoundData = () => {
  const startNum = getRandomInRange();
  const stepProg = getRandomInRange(minStepProg, maxNum);
  const progLength = getRandomInRange(minProgLength, maxNum);
  const [progression, answer] = getProgressionAndAnswer(startNum, stepProg, progLength);
  const question = `Question: ${progression}`;
  return [question, answer];
};

export default () => runEngineGame(getRoundData, rule);
