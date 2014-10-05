module.exports.copy = function(obj) {
    var newObj = {}; 
    
    for(prop in obj) {
        var key = prop; 
        newObj[key] = obj[key]; 
    }

    return newObj; 
}; 

module.exports.extend = function(dest, src) {
  for(sProp in src) {
    var key = sProp;
    var value = src[sProp]; 

    for(dProp in dest) {
      if(key === dProp && value != dest[dProp]) {
        dest[dProp] = value; 
      } 
      else if(key !== dProp) {
          dest[key] = value; 
      }
    }

  }
  return dest; 
};

module.exports.hasElems = function(obj, arr) {
    
    for(var i = 0; i < arr.length; i++) {
     if(arr[i] in obj){
         continue; 
     } 
     else {
         return false; 
     }
    }
    return true; 
};
