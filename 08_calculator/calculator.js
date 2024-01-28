const add = function (num1, num2) {

  return num1 + num2;

};

const subtract = function (num1, num2) {

  return num1 - num2;

};

const sum = function (array) {

  let sum = 0;

  for (let n of array) {
    sum += n;
  }

  return sum;

};

const multiply = function (array) {

  let m = array[0];

  for (let n of array) {

    if (n !== m) {
      m *= n;
    }
  }

  return m;

};

const power = function (num, exponent) {

  return Math.pow(num, exponent)

};

const factorial = function (n) {

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
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
