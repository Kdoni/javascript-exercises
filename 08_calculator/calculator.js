const add = function (a, b) {
  return a + b;

};

console.log(add(2, 2));

const subtract = function (a, b) {
  return a - b;

};

const sum = function (array) {
  return array.reduce((a, b,) => (a + b), 0);
};

const multiply = function (array) {
  return array.reduce((a, b) => a * b);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return (num * factorial(num - 1));
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
