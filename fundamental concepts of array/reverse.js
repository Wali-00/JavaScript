const numbers = [1, 2, 3, 4, 5];
console.log(numbers); // output: [1, 2, 3, 4, 5]
// numbers.reverse();
// console.log(numbers); // output: [5, 4, 3, 2, 1]

const revs =[];

for(const rev of numbers) {
    revs.unshift(rev);
}
console.log(revs); // output: [5, 4, 3, 2, 1]

for(let i = numbers.length - 1; i >= 0; i--) {
    const num = numbers[i];
    console.log(num);
}