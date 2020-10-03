const CustomError = require('../extensions/custom-error');

module.exports = function countCats(matrix) {
  // remove line with error and write your code here

  let count = 0;

  matrix.forEach((line) => {
    line.forEach((item) => {
      count += item === '^^' ? 1 : 0;
    });
  });

  return count;
};
