const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let result = [];

  members.forEach((member) => {
    if(typeof member !== 'string') return
    result.push( member.trim().slice(0,1).toUpperCase());
  });

  result = result.sort().join('');
  
  return result;
};
