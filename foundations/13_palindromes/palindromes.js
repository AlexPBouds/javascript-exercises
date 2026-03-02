const palindromes = function (string) {
  let newString = string.replace(/\W/g, "").toLowerCase();
  let startIndex = 0;
  let endIndex = newString.length - 1;

  while (startIndex < endIndex) {
    if (newString[startIndex] !== newString[endIndex]) {
      return false;
    }

    startIndex++;
    endIndex--;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
