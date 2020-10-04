const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(!Array.isArray(arr)) return 0;
    let depth = 1;
    arr.forEach((item) => {
      const currentDepth = this.calculateDepth(item);
      depth = currentDepth + 1 > depth  ? currentDepth + 1 : depth;
    });

    return depth;
  }
};
