const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	const sumTotal = numArray.reduce((total, currentNum) => {
    return total + currentNum;
  }, 0)
  
  return sumTotal;
};

const multiply = function(numArray) {
	const multiplyTotal = numArray.reduce((total, currentNum) => {
    return total * currentNum;
  }, 1)

  return multiplyTotal;
};

const power = function(num, power) {
	let powerTotal = num;

  for(let i = 0; i < power - 1; i++){
    powerTotal = powerTotal * num;
  }

  return powerTotal;
};

const factorial = function(num) {
	let factorialTotal = 1;

  for(let i = 1; i < num + 1; i++){
    factorialTotal = factorialTotal * i;
  }

  return factorialTotal;
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
