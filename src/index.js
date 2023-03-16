import readlineSync from 'readline-sync';

const generateRoundData = (description, generateRound) => {
  const roundsCount = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateRound();

    console.log(`Question: ${question}`);
    const usersAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === usersAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
      \nLet's try again, ${userName}!`);
      break;
    }
    if ((i + 1) === roundsCount) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default generateRoundData;
