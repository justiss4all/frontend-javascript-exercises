module.exports.sumNumbers = function(array) {
    var sum = 0; 

    for(var i = 0; i < array.length; i++ ) {
        sum += array[i]; 
    }
    
    return sum;  
}; 

module.exports.splitAndLowerCaseString = function (string) {
    var splitString = string.split(",");
    var splitAndLower = []; 
    
    for(var i=0; i < splitString.length; i++) {  
     var lower = splitString[i].toLowerCase(); 
     splitAndLower.push(lower); 
    }

    return splitAndLower; 
  
}; 

module.exports.addIndex = function (inputs) {
    var outputs = []; 

    for(var i=0; i < inputs.length; i++) {
        outputs.push(i + " is " + inputs[i]); 
    }

    return outputs; 
}; 
