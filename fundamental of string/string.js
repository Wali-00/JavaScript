// declare of string
const greeting = "Hello, World!";
const name = 'John Doe';
const message = `Welcome to JavaScript programming!`;
const newString = new String("This is a new string");// its not recommended to use String constructor to create strings, as it creates a string object instead of a primitive string. This can lead to unexpected behavior when using string methods and comparisons. It's better to use string literals (double quotes, single quotes, or backticks) for creating strings in JavaScript.

console.log(greeting[0]); // output: H
console.log(name.length); // output: 8
console.log(message.toUpperCase()); // output: WELCOME TO JAVASCRIPT PROGRAMMING!
console.log(greeting.toLowerCase()); // output: hello, world!
console.log(name.includes("Doe")); // output: true
console.log(message.replace("JavaScript", "JS")); // output: Welcome to JS programming!

// trim()
const stringWithSpaces = "   Hello, World!   ";
console.log(stringWithSpaces.trim()); // output: "Hello, World!"
// trim() method is used to remove whitespace from both ends of a string. It does not modify the original string but returns a new string with the whitespace removed. In this example, we have a string with leading and trailing spaces, and using trim() removes those spaces, resulting in a clean string without extra whitespace.

// split() method
const csv = "John,Doe,30,Engineer";
const csvArray = csv.split(","); // splits the string into an array using comma as the separator
console.log(csvArray); // output: ["John", "Doe", "30", "Engineer"]
// split() method is used to divide a string into an array of substrings based on a specified separator. In this example, we use a comma (",") as the separator to split the csv string into an array of individual values. The resulting array contains the elements "John", "Doe", "30", and "Engineer". If no separator is provided, the entire string will be returned as a single element in the array.

// join() method
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.join("|")); // output: "apple|banana|cherry"
// join() method is used to concatenate all the elements of an array into a single string, with an optional separator between the elements. In this example, we use "|" as the separator to create a pipe-separated string of fruit names. If no separator is provided, the default is a comma (",").


//concat() method
const array1 = ["Hello", "World"];
const array2 = ["Welcome", "to", "JavaScript"];
const combinedArray = array1.concat(array2);
console.log(combinedArray); // output: ["Hello", "World", "Welcome", "to", "JavaScript"]

// reverse() method
const originalString = "Hello, World!";
const reversedString = originalString.split("").reverse().join("");
console.log(reversedString); // output: "!dlroW ,olleH"

// reverse manually

let str = "Hello, World!";
let reversed = "";
for(let i = str.length - 1; i >= 0; i--){
    reversed += str[i];
}
console.log(reversed); // output: "!dlroW ,olleH"