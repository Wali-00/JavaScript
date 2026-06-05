var orangePrice = 20;
var applePrice = .5;
var cherryPrice = parseInt('25');// this will convert the string '25' to the number 25
var cherryPrice = parseInt('twenty');// this will return NaN (Not a Number) because 'twenty' cannot be converted to a number
var cherryPrice = parseFloat('25.5');// this will convert the string '25.5' to the number 25.5

console.log(orangePrice+cherryPrice);


var num1 = .1;
var num2 = .2;
var sum = num1 + num2;
console.log(sum);
console.log(sum.toFixed(2)); // this will round the sum to 2 decimal places and return a string

var num = 50/0; // this will return Infinity because division by zero is not defined

var num = -50/0; // this will return -Infinity because division by zero is not defined


