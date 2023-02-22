import getRandomNumber from '../getRandomNumber.js';
import logic from '../index.js';

const getQuestionString = 'Find the greatest common divisor of given numbers.';

const nod = () => {
  let num1 = getRandomNumber();
  let num2 = getRandomNumber();

  const expression = `${num1} ${num2}`;

  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  const sum = num1 + num2;
  const correctAnswer = sum.toString();

  return [expression, correctAnswer];
};

export default () => {
  logic(getQuestionString, nod);
};
