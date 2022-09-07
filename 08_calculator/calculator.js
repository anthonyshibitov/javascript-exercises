const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  if (nums.length == 0) return 0;
	const result = nums.reduce((prev, curr) => prev + curr);
  return result;
};

const multiply = function(nums) {
  if (nums.length == 0) return 0;
	const result = nums.reduce((prev, curr) => prev * curr);
  return result;
};

const power = function(a, b) {
	let result = a;
  for(let i = 1; i < b; i++){
    result *= a;
  }
  return result;
};

const factorial = function(a) {
	let result = a;
  if (a === 0) return 1;

  for(let i = a-1; i > 0; i--){
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
