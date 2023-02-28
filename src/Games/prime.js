import getRandomNumber from '../helpers.js';
import logic from '../index.js';

const getQuestionString = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minNum = 0;
const maxNum = 100;

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  let i = 2;
  const limit = Math.sqrt(num);
  while (i <= limit) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
};

const runPrime = () => {
  const num = getRandomNumber(minNum, maxNum);
  const question = num.toString();
  const correctAnswer = isPrime(num) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  logic(getQuestionString, runPrime);
};
