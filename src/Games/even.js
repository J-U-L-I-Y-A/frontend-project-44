#!/usr/bin/env node
import logic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const isEven = (num) => num % 2 === 0;

const getQuestionString = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => {
  const minNum = 0;
  const maxNum = 100;
  const randomNumber = getRandomNumber(minNum, maxNum);
  const number = randomNumber.toString();
  const writeAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [number, writeAnswer];
};

export default () => {
  logic(getQuestionString, game);
};
