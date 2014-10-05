module.exports.stream = function (conditionalFn, actionFn) {
    counter = 10; 
    while(conditionalFn()){
        actionFn(); 
    }
}; 

 

module.exports.sumNumbers = function(arr) {
    var sum = 0; 
    var i = 0; 
    while(i < arr.length){
        sum += arr[i]; 
        i++; 
    }
    return sum; 
}; 


