#!/usr/bin/env node

import readlineSync from 'readline-sync';

import welcom from './cli.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getEvenNumberAndRun = () => {
  const minNum = 0;
  const maxNum = 100;

  const userName = welcom();
  const explanation = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(explanation);

  const answerToQuestion = () => {
    let correct = 0;
    for (let i = 0; i < 3; i += 1) {
      const randomNumber = getRandomNumber(minNum, maxNum);
      console.log(`Question: ${randomNumber}`);
      const userAnswer = readlineSync.question('Your answer: ');
      const writeAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
      if (userAnswer === writeAnswer) {
        correct += 1;
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${writeAnswer}'.\nLet's try again, ${userName}!`);
        break;
      }
    }
    if (correct === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  };
  answerToQuestion();
};

export default getEvenNumberAndRun;
