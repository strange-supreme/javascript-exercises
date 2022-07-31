const leapYears = function(year) {
    let isLeapYear = false;
    for(let i = 1904; i <= year;i+=4){
        if(i == year){
            return isLeapYear = true;
        }
     
    }
    if(year%400 == 0){
        return isLeapYear = true;
    }
  return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
