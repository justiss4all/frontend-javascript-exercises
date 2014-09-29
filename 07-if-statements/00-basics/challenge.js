module.exports.favoriteNumber = function (fav, guess) {
  if (guess > fav) {
    return "Too high"; 
  }
  else if (guess < fav) {
    return "Too low"; 
  }
  else {
    return "You got it!"; 
  }
};


// this one took me a while. 
module.exports.checkLock = function (num1, num2, num3, num4) {
  if ((num1 === 3) || (num1 === 5) || (num1 === 7)) {

    if ((num2 === 2)) {

      if ((num3 >= 5) && (num3 <= 100)) {

        if ((num4 < 9) || (num4 > 20)) {
          return "correct";  
        }
        else {
          return "incorrect";  
        }

        return "correct";  
      }
      else {
        return "incorrect"; 
      }

      return "correct";   
    }
    else {
      return "incorrect";  
    }

    return "correct"; 
  }
  else {
    return "incorrect"; 
  }
};

module.exports.canIGet = function (item, money) {
  if ((item === 'MacBook Air') && (money >= 999)) {
    return true; 
  } 
  else if ((item === 'MacBook Pro') && (money >= 1299)) {
    return true; 
  }
  else if ((item === 'Mac Pro') && (money >= 2499)) {
    return true; 
  }
  else if ((item === 'Apple Sticker') && (money >= 1)) {
    return true; 
  }
  else {
    return false; 
  }
};










