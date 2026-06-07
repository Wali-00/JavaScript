// we can store multiple values in a single variable using arrays

// arrays are ordered collections of data, which can be of any type (numbers, strings, objects, etc.)

// creating an array
let fruits = ["apple", "banana", "cherry"];

// accessing array elements
console.log(fruits[0]); // output: apple
console.log(fruits[1]); // output: banana
console.log(fruits[2]); // output: cherry

// modifying array elements
fruits[0] = "orange";
console.log(fruits[0]); // output: orange

// arrays can also contain mixed data types but it's generally recommended to keep them homogeneous for better readability and maintainability
const mixedArray = [5, "hello", true];


//length of an array
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // output: 5

// adding elements to an array
numbers.push(6); // adds 6 to the end of the array
console.log(numbers); // output: [1, 2, 3, 4, 5, 6]

// removing elements from an array
numbers.pop(); // removes the last element (6) from the array
console.log(numbers); // output: [1, 2, 3, 4, 5]

//removing the first element from an array
numbers.shift(); // removes the first element (1) from the array
console.log(numbers); // output: [2, 3, 4, 5]

// adding an element to the beginning of an array
numbers.unshift(0); // adds 0 to the beginning of the array
console.log(numbers); // output: [0, 2, 3, 4, 5]
