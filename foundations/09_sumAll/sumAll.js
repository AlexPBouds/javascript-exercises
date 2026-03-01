const sumAll = function (valA, valB) {
  if (
    valA < 0 ||
    valB < 0 ||
    valA % 1 !== 0 ||
    valB % 1 !== 0 ||
    typeof valA !== "number" ||
    typeof valB !== "number"
  ) {
    return "ERROR";
  }

  const startValue = Math.min(valA, valB);
  const endValue = Math.max(valA, valB);
  let sum = 0;

  for (let i = startValue; i <= endValue; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
