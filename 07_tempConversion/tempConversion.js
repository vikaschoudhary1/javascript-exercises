const ftoc = function(temp) {
  let newTemp = (temp - 32)* 5/9;
  newTemp = +newTemp.toFixed(1);
  return newTemp;
};

const ctof = function(temp) {
  let newTemp = (temp * 9/5) + 32;
  newTemp = +newTemp.toFixed(1);
  return newTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
