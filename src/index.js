import readlineSync from 'readline-sync';

const logic = (getQuestionString, game) => {
  const gameRounds = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let correct = 0;
  for (let i = 0; i < gameRounds; i += 1) {
    const [question, writeAnswer] = game();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (writeAnswer === answer) {
      correct += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${writeAnswer}'.
      \nLet's try again, ${userName}!`);
      break;
    }
  }
  if (correct === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default logic;
