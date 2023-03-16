import getRandomNumber from '../helpers.js';
import startGame from '../index.js';

const description = 'What is the result of the expression?';

const mathSymbols = ['+', '-', '*'];
const calculate = (x, y, mathSymbol) => {
  switch (mathSymbol) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`There is no such operator like '${mathSymbol}'!`);
  }
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
  startGame(description, getExampleAndCorrectAnswer);
};
