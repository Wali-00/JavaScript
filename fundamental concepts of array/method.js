const name =["John", "Jane", "Doe"];

console.log(name.includes("Jane")); // output: true
console.log(name.includes("Smith")); // output: false
// includes() method is used to check if an array contains a specific element. It returns true if the element is found, and false otherwise.its case-sensitive and checks for the exact match of the element in the array.
// indexOf() method

console.log(name.indexOf("Jane")); // output: 1
console.log(name.indexOf("Smith")); // output: -1

// indexOf() method is used to find the index of the first occurrence of a specific element in an array. It returns the index if the element is found, and -1 if it is not found. Like includes(), it is also case-sensitive and checks for the exact match of the element in the array.

// isArray() method
console.log(Array.isArray(name)); // output: true
const age = 30;
console.log(Array.isArray(age)); // output: false
// isArray() method is used to check if a variable is an array. It returns true if the variable is an array, and false otherwise. This method is useful for validating data types and ensuring that you are working with arrays when expected.


// join() method
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.join(", ")); // output: "apple, banana, cherry"
// join() method is used to concatenate all the elements of an array into a single string, with an optional separator between the elements. In this example, we use ", " as the separator to create a comma-separated string of fruit names. If no separator is provided, the default is a comma (",").

//concat() method
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = array1.concat(array2);
console.log(combinedArray); // output: [1, 2, 3, 4, 5, 6]
// concat() method is used to merge two or more arrays into a single array. It does not modify the original arrays but returns a new array that contains the elements of all the input arrays. In this example, we combine array1 and array2 to create a new array called combinedArray.

// slice() method
const numbers = [1, 2, 3, 4, 5];
const slicedNumbers = numbers.slice(1, 4);
console.log(slicedNumbers); // output: [2, 3, 4]
// slice() method is used to extract a portion of an array and return it as a new array. It takes two arguments: the starting index (inclusive) and the ending index (exclusive). In this example, we slice the numbers array from index 1 to index 4, which gives us the elements at indices 1, 2, and 3 (2, 3, and 4). The original numbers array remains unchanged.

// splice() method
const colors = ["red", "green", "blue", "yellow"];
colors.splice(2, 1, "purple", "orange");
console.log(colors); // output: ["red", "green", "purple", "orange", "yellow"]
// splice() method is used to add, remove, or replace elements in an array. It takes three arguments: the starting index, the number of elements to remove, and the elements to add (if any). In this example, we start at index 2 (which is "blue"), remove 1 element ("blue"), and add "purple" and "orange" in its place. The original colors array is modified to reflect these changes.


