module.exports.reversePlusOne = function(array) {
  var newArray = array.reverse(); 
  newArray.unshift(1); 
  return newArray; 
};

module.exports.plusesEverywhere = function(array) {
  var newArray = array.join('+'); 
  return newArray; 
};

module.exports.arrayQuantityPlusOne = function(array) {
  var plusOne = array.length + 1; 
  return plusOne; 
};