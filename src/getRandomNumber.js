const minNum = 0;
const maxNum = 50;

const getRandomNumber = () => Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

export default getRandomNumber;
