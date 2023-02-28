import logic from '../index.js';
import getRandomNumber from '../helpers.js';

const isEven = (num) => num % 2 === 0;

const getQuestionString = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionNumberAndWriteAnswer = () => {
  const minNum = 0;
  const maxNum = 100;
  const randomNumber = getRandomNumber(minNum, maxNum);
  const numberToString = randomNumber.toString();
  const writeAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [numberToString, writeAnswer];
};

export default () => {
  logic(getQuestionString, getQuestionNumberAndWriteAnswer);
};
