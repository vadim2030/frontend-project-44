import readlineSync from 'readline-sync';

const roundsCount = 3;

const runEngineGame = (getGameRound, rule) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = getGameRound();
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === yourAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runEngineGame;
