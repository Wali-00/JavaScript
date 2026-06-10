function tenTimes(num) {
    const result = num * 10;
    return result;
    // console.log(result); // This line will never be executed
    //any code after return will not be executed
}

const output = tenTimes(5);
console.log(output); // This will print 50
