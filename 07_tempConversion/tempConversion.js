const convertToCelsius = function(temp) {
  
  let convertedTemp = (temp - 32) * 5 / 9;

  var rounded = Math.round(convertedTemp * 10) / 10

  return rounded;
};

const convertToFahrenheit = function(temp) {

  let convertedTemp = temp * 9 / 5 + 32;

  var rounded = Math.round(convertedTemp * 10) / 10

  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
