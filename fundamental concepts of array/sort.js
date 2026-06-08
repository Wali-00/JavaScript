const persons = ['ravi', 'suresh', 'kumar', 'arun', 'vijay'];

const sortedPersons = persons.sort();
console.log(sortedPersons);

// sort method compare with strings based on their Unicode code point values, which means it may not always produce the expected results when sorting strings with different cases or special characters. To sort strings in a case-insensitive manner, you can provide a custom comparison function to the sort method.

const numbers = [5, 2,14,45, 9, 1, 5, 6];
const sortedNumbers = numbers.sort();

// ascending order
const sortedNumbersAsc = numbers.sort(function(a, b) {
    return a - b;
});
console.log(sortedNumbersAsc); // output: [1, 2, 5, 5, 6, 9, 14, 45]

// descending order
const sortedNumbersDesc = numbers.sort(function(a, b) {
    return b - a;
});
console.log(sortedNumbersDesc); // output: [45, 14, 9, 6, 5, 5, 2, 1]