import uniqueRandomArray from 'unique-random-array'
const starWarsNames = require('./starwars-names.json')

<<<<<<< HEAD
const mainExport = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames),
=======
const getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
  all: starWarsNames,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    const randomItems = [];
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
>>>>>>> 12805ee6ba2db911037422c2ac2184d6886b7ea7
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
