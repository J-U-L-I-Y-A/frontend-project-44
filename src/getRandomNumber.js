const minNum = 0;
const maxNum = 100;

const getRandomNumber = () => Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

export default getRandomNumber;
