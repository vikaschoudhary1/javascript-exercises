const add = function(a, b) {
  return a + b;
};


const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	const sumArr = arr.reduce((total, item) => {
    return total + +item;
  }, 0)
    return sumArr;
};

const multiply = function(arr) {
  return arr.reduce((product, item) => {return product * item}, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	if (num === 0) {return 1}
  else { const numArr = [];
        for (let i = 1; i <= num; i++){
          numArr[i-1] = i;
        }
        return numArr.reduce((product, item) => { return product * item}, 1);
      };
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
