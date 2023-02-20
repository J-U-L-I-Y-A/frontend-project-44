import getRandomNumber from '../getRandomNumber.js';
import logic from '../index.js';

const getQuestionString = 'What is the result of the expression?';
const getCalc = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const mathSymbol = ['+', '-', '*'];
  const getRandomSymbol = mathSymbol[Math.floor(Math.random() * mathSymbol.length)];
  const expression = `${firstNumber} ${getRandomSymbol} ${secondNumber}`;
  // eslint-disable-next-line no-eval
  const calculate = eval(expression).toString();

  return [expression, calculate];
};

export default () => {
  logic(getQuestionString, getCalc);
};
