const CustomError = require('../extensions/custom-error');

const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const makeTable = () => {
  const table = {};
  alphabet.forEach((i, idxI) => {
    alphabet.forEach((j, idxJ) => {
      let index = idxJ + idxI;
      index = index > alphabet.length - 1 ? index - alphabet.length : index;
      table[`${i}${j}`] = alphabet[index];
    });
  });
  return table;
};

const table = makeTable();

class VigenereCipheringMachine {
  constructor(type) {
    this.type = type || type === undefined ? true : false;
  }

  encrypt(text, code) {
    const textUpCase = text.toUpperCase().split('');
    let codeUpCase = code.toUpperCase().split('');

    let codeTimes = Math.ceil(textUpCase.length / codeUpCase.length);

    for (let i = 1; i < codeTimes; i++) {
      codeUpCase = codeUpCase.concat(codeUpCase);
    }

    textUpCase.forEach((letter, idx) => {
      if (!/[A-Z]/.test(letter)) {
        codeUpCase.splice(idx, 0, letter);
      }
    });

    codeUpCase.length = textUpCase.length;

    let result = [];
    textUpCase.forEach((item, idx) => {
      const current = table[`${item}${codeUpCase[idx]}`];
      result.push(current ? current : item);
    });

    if (!this.type) result.reverse();
    result = result.join('');
    return result;
  }

  decrypt(text, code) {
    const textUpCase = text.toUpperCase().split('');
    // if (!this.type) textUpCase.reverse();
    let codeUpCase = code.toUpperCase().split('');

    let codeTimes = Math.ceil(textUpCase.length / codeUpCase.length);

    for (let i = 1; i < codeTimes; i++) {
      codeUpCase = codeUpCase.concat(codeUpCase);
    }

    textUpCase.forEach((letter, idx) => {
      if (!/[A-Z]/.test(letter)) {
        codeUpCase.splice(idx, 0, letter);
      }
    });

    codeUpCase.length = textUpCase.length;

    let result = [];
    codeUpCase.forEach((item, idx) => {
      if (/[A-Z]/.test(item)) {
        alphabet.forEach((letter) => {
          const currentLetter = table[`${item}${letter}`];
          if (currentLetter === textUpCase[idx]) {
            result.push(letter);
          }
        });
      } else {
        result.push(item);
      }
    });
    
    if (!this.type) result.reverse();
    result = result.join('');
    return result;
  }
}

module.exports = VigenereCipheringMachine;
