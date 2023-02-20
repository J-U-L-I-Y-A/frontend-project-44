#!/usr/bin/env node
import logic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const isEven = (num) => num % 2 === 0;

const getQuestionString = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => {
  const randomNumber = getRandomNumber();
  const number = randomNumber.toString();
  const writeAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [number, writeAnswer];
};

export default () => {
  logic(getQuestionString, game);
};
