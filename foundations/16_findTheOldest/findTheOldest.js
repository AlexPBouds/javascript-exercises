const findTheOldest = function (array) {
  let oldest = array[0];
  let oldestAge = array[0].yearOfDeath
    ? array[0].yearOfDeath - array[0].yearOfBirth
    : new Date().getFullYear() - array[0].yearOfBirth;

  for (let i = 1; i < array.length; i++) {
    currentAge = array[i].yearOfDeath
      ? array[i].yearOfDeath - array[i].yearOfBirth
      : new Date().getFullYear() - array[i].yearOfBirth;

    if (currentAge > oldestAge) {
      oldest = array[i];
      oldestAge = currentAge;
    }
  }

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
