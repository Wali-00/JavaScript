/*
ternary operator is a shorthand for an if-else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. The syntax is as follows:

condition ? expressionIfTrue : expressionIfFalse;
*/

//simple ternary operator example:
const age = 18;
age >= 18 ? console.log("You are an adult.") : console.log("You are a minor.");

// nested ternary operator example:
const score = 85;
score >= 90 ? console.log("You got an A") : score >= 80 ? console.log("You got a B") : console.log("You got a C");
