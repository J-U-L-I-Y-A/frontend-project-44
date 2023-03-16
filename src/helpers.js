// eslint-disable-next-line max-len
const getRandomNumber = (minNum = 0, maxNum = 50) => Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

export default getRandomNumber;
