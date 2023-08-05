import getRandomInRange from '../getRandomInRange.js';

const runProgressionGame = () => {
  const startNum = getRandomInRange();
  const stepProg = getRandomInRange(1, 10);
  const progLength = getRandomInRange(5, 10);
  const index = getRandomInRange(1, progLength);
  const progression = [startNum];
  for (let i = 0; i <= progLength - 1; i += 1) {
    const lastNum = progression[progression.length - 1];
    progression.push(lastNum + stepProg);
  }
  const answer = progression[index];
  progression[index] = '..';
  console.log(progression.join(' '));
  return String(answer);
};

export default runProgressionGame;
