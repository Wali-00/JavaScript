// leap year or not

function isLeapYear(year) {
    if(year % 400 ===0 || (year % 4 === 0 && year % 100 !== 0)){
        return year + " is a leap year";
    }
    else{
        return year+" is not a leap year";
    }
}

const leapYear = isLeapYear(5);
console.log(leapYear);