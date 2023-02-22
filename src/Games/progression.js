import getRandomNumber from '../getRandomNumber.js';
import logic from '../index.js';

const getQuestionString = 'What number is missing in the progression?';

const getRandomItem = (items) => Math.floor(Math.random() * items.length);

const minLength = 5;
const maxLength = 10;
const minStep = 1;
const maxStep = 10;
const minNum = 1;
const maxNum = 100;

const getRandomProgression = (length, startNumber, step) => {
  const arrayProgression = [];
  for (let i = startNumber; arrayProgression.length < length; i += step) {
    arrayProgression.push(i);
  }
  return arrayProgression;
};

const length = getRandomNumber(minLength, maxLength);
const startNumber = getRandomNumber(minNum, maxNum);
const step = getRandomNumber(minStep, maxStep);

const runProgression = () => {
  const arrayProgression = getRandomProgression(length, startNumber, step);
  const hiddenNumber = getRandomItem(arrayProgression);
  const correctAnswer = arrayProgression[hiddenNumber].toString();
  arrayProgression[hiddenNumber] = '..';
  const question = arrayProgression.join(' ');
  return [question, correctAnswer];
};

export default () => {
  logic(getQuestionString, runProgression);
};
