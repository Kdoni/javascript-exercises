const ftoc = function(temperatureF) {
  let outcome = (temperatureF-32)/1.8;
  let rounded = Math.round(outcome*10)/10;
  return rounded;
};

const ctof = function(temperatureC) {
  let outcome = (temperatureC*1.8)+32;
  let rounded = Math.round(outcome*10)/10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
