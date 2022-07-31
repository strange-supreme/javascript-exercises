const ftoc = function(num) {
  let cel;
   
  cel = (num-32) * 5/9

return Math.round(cel * 10) / 10;
};

const ctof = function(num) {
  let fah;
  fah = num * 1.8 + 32;

  return Math.round(fah * 10) / 10;;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
