import getRandomInRange from '../getRandomInRange.js';
import runEngineGame from '../index.js';

const minStepProg = 1;
const minProgLength = 5;
const maxNum = 10;

const progressGeneration = () => {
  const startNum = getRandomInRange();
  const stepProg = getRandomInRange(minStepProg, maxNum);
  const progLength = getRandomInRange(minProgLength, maxNum);
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

const progressionGame = () => {
  const [progression, answer] = progressGeneration();
  const question = `Question: ${progression}`;
  return [question, answer];
};

const runProgressionGame = () => runEngineGame(progressionGame, 'What number is missing in the progression?');

export default runProgressionGame;
