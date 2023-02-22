import getRandomNumber from '../getRandomNumber.js';
import logic from '../index.js';

const getQuestionString = 'Find the greatest common divisor of given numbers.';

const nod = () => {
  const minNum = 0;
  const maxNum = 50;
  let num1 = getRandomNumber(minNum, maxNum);
  let num2 = getRandomNumber(minNum, maxNum);

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
