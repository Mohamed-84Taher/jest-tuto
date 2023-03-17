const theSum = (...numbers) => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};
module.exports = theSum;
