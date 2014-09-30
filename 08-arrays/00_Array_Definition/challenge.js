module.exports.newArray = function (num1, num2, num3, num4) {
  var array = []; 
  array.push(num1, num2, num3, num4); 
  return array; 

}; 

module.exports.firstAndLast = function (array) {
  //var first = array.shift(); 
  //var last = array.pop(); 
  var newArray = [array.shift(), array.pop()]; 
  return newArray; 
};