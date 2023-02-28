import getRandomNumber from '../helpers.js';
import logic from '../index.js';

const getQuestionString = 'What is the result of the expression?';

const mathSymbols = ['+', '-', '*'];
const calculate = (x, y, mathSymbol) => {
  let result;
  switch (mathSymbol) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    default:
      throw new Error(`There is no such operator like '${mathSymbol}'!`);
  }
  return result;
};

const getExampleAndCorrectAnswer = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const getRandomSymbol = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];
  const expression = `${firstNumber} ${getRandomSymbol} ${secondNumber}`;
  const correctAnswer = calculate(firstNumber, secondNumber, getRandomSymbol).toString();

  return [expression, correctAnswer];
};

export default () => {
  logic(getQuestionString, getExampleAndCorrectAnswer);
};
