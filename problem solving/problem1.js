// inch to feet converter

function inchToFeet(inch) {
    var feet = inch / 12;
    var remainingInch = inch % 12;
    return feet + " feet and " + remainingInch + " inches";
}

var myInch = inchToFeet(144);
console.log(myInch);

// feet to inch converter
function feetToInch(feet) {
    var inch = feet * 12;
    return inch;
}

var myFeet = feetToInch(12);
console.log(myFeet);

// mile to kilometer converter
function mileToKilometer(mile) {
    var kilometer = mile * 1.60934;
    return kilometer;
}

var myMile = mileToKilometer(5);
console.log(myMile);

// kilometer to mile converter
function kilometerToMile(kilometer) {
    var mile = kilometer / 1.60934;
    return mile;
}

var myKilometer = kilometerToMile(8);
console.log(myKilometer);