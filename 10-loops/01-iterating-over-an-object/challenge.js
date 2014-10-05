module.exports.getKeys = function(obj) {
    var objArray = []; 
    
    for(key in obj) {
        objArray.push(key); 
    }
    
    return objArray; 
}; 

module.exports.getValues = function(obj) {
    var objArray = []; 
    
    for(key in obj) {
        objArray.push(obj[key]); 
    }
    
    return objArray; 
}; 

module.exports.objectToArray = function(obj) {
    var objArray = []; 
    
    for(key in obj) {
        objArray.push(key + " is " + obj[key]); 
    }
    
    return objArray; 
  
}; 