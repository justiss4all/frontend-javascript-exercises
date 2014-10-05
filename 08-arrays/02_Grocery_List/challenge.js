/* module.exports.addItem = function(item, list) {
  for(var i = 0; i < list.length; i++) {
    if(list[i] === item) {
      return list; 
    }
    else {
      list.push(item); 
      return list; 
    }
  }
};
*/

module.exports.addItem = function(item, list) {
  for(var i = 0; i < list.length; i++) {
    if(list[i] !== item) {
      list.push(item); 
    } 
  }; 
  return list; 
};

module.exports.reverseSortedList = function(array) {
  array.sort(); // defaults to ascending
  array.reverse(); // reverses to descending
  return array; 
};