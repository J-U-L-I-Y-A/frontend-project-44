import readlineSync from 'readline-sync';

export default (getQuestionString, generateRound) => {
  const roundsCount = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(getQuestionString);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, writeAnswer] = generateRound();

    console.log(`Question: ${question}`);
    const usersAnswer = readlineSync.question('Your answer: ');

    if (writeAnswer === usersAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${writeAnswer}'.
      \nLet's try again, ${userName}!`);
      break;
    }
    if ((i + 1) === roundsCount) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
