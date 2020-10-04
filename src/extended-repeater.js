const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  let addition;
  if (options.addition !== undefined) {
    addition = options.addition + '' || '';
  }
  const additionSeparator = options.additionSeparator || '|';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  let addSeporation = Array(additionRepeatTimes).fill(addition);
  addSeporation = addSeporation.join(additionSeparator);

  const result = Array(repeatTimes).fill(str + addSeporation);

  return result.join(separator);
};
