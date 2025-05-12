const add = function(operand1, operand2) {
	return operand1 + operand2;
};

const subtract = function(operand1, operand2) {
	return operand1 - operand2;
};

const sum = function(inputArray) {
	return inputArray.reduce((sum, current) => sum + current, 0);
};

const multiply = function(inputArray) {
    return inputArray.reduce(
        (operand, current) => operand * current, 1
    );
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(operand) {
	let result = 1;
    if (operand === 1) return result;
    while(operand >= 1) {
        result *= operand;
        operand--;
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
