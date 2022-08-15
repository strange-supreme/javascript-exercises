const add = function(num,num2) {
	return num + num2;
};

const subtract = function(num,num2) {
	return num - num2;
};

const sum = function(params) {
	return num + num2;
};

const multiply = function(num,num2) {
  return num * num2;
};

const power = function(num,num2) {
	return Math.pow(num,num2);
};

const factorial = function(num) {
  let fac = 0;
	for(let i = 1; i<=num;i++){
    fac *= i;
  }
  return fac;
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
