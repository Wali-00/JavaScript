function tenTimes(num) {
  const result = num * 10;
  return result;
  // console.log(result); // This line will never be executed
  //any code after return will not be executed
}

const output = tenTimes(5);
console.log(output); // This will print 50

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

console.log(isEven(4)); // This will print true
console.log(isEven(7)); // This will print false

function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    total += element;
  }
  return total;
}

const sumOf = sum([1, 2, 3, 4, 5]);
console.log(sumOf);

function even(numbers) {
  const evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element % 2 === 0) {
      evenNumbers.push(element);
    }
  }
  return evenNumbers;
}

const evenNumbers = even([1, 2, 3, 4, 5, 6]);
console.log(evenNumbers);