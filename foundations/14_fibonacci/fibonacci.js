const fibonacci = function (val) {
  let number = Number(val);

  if (number < 0) {
    return "OOPS";
  }

  if (number === 0) {
    return 0;
  }

  if (number < 3) {
    return 1;
  }

  let a = 1;
  let b = 1;

  for (let i = 3; i <= number; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return b;
};

// Do not edit below this line
module.exports = fibonacci;
