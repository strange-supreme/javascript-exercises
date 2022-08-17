const add = function(num,num2) {
	return num + num2;
};

const subtract = function(num,num2) {
	return num - num2;
};

const sum = function(ar) {
  let num = 0;
	for(let i = 0; i < ar.length;i++){
    num += ar[i]
  }
  if(isNaN(num)){
    return  0;
  } else {
    return num;
  }
  
};

const multiply = function(ar) {
  let num = 1;
	for(let i = 0; i < ar.length;i++){
    num *= ar[i]
  }
  return num;
};

const power = function(num,num2) {
	return Math.pow(num,num2);
};

const factorial = function(num) {
  let fac = 1;
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
