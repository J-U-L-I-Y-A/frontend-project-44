// eslint-disable-next-line max-len
const getRandomNumber = (min = 0, max = 50) => Math.floor(Math.random() * (max - min + 1)) + min;

export default getRandomNumber;
