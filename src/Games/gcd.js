import getRandomNumber from '../helpers.js';
import logic from '../index.js';

const getQuestionString = 'Find the greatest common divisor of given numbers.';

const num1 = getRandomNumber();
const num2 = getRandomNumber();

const getGCD = (numX, numY) => {
  let x = numX;
  let y = numY;
  while (x !== 0 && y !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }
  return x + y;
};

const getQuestionAndCorrectAnswer = () => {
  const expression = `${num1} ${num2}`;
  const correctAnswer = getGCD(num1, num2).toString();

  return [expression, correctAnswer];
};

export default () => {
  logic(getQuestionString, getQuestionAndCorrectAnswer);
};
