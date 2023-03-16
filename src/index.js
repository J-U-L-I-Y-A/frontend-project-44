import readlineSync from 'readline-sync';

export default (getQuestionString, generateRound) => {
  const roundsCount = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(getQuestionString);

  let sumWriteAnswer = 0;
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, writeAnswer] = generateRound();

    console.log(`Question: ${question}`);
    const usersAnswer = readlineSync.question('Your answer: ');

    if (writeAnswer === usersAnswer) {
      sumWriteAnswer += 1;
      console.log('Correct!');
    } else {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${writeAnswer}'.
      \nLet's try again, ${userName}!`);
      break;
    }
  }
  if (sumWriteAnswer === roundsCount) {
    console.log(`Congratulations, ${userName}!`);
  }
};
