import getRandomInRange from '../utils.js';
import runEngineGame from '../index.js';

const minStepProg = 1;
const minProgLength = 5;
const maxNum = 10;
const rule = 'What number is missing in the progression?';

const getProgression = (startNum, stepProg, progLength, positionUnknown) => {
  const progression = [startNum];
  for (let i = 0; i <= progLength - 1; i += 1) {
    const lastNum = progression[progression.length - 1];
    progression.push(lastNum + stepProg);
  }
  progression[positionUnknown] = '..';
  return progression.join(' ');
};

const getRoundData = () => {
  const startNum = getRandomInRange();
  const stepProg = getRandomInRange(minStepProg, maxNum);
  const progLength = getRandomInRange(minProgLength, maxNum);
  const positionUnknown = getRandomInRange(1, progLength);
  const progression = getProgression(startNum, stepProg, progLength, positionUnknown);
  const answer = String(startNum + positionUnknown * stepProg);
  const question = progression;
  return [question, answer];
};

export default () => runEngineGame(getRoundData, rule);
