const getRandomNumber = (minNum = 0, maxNum = 50) => {
  const num = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  return num;
};

export default getRandomNumber;
