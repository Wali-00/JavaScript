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
