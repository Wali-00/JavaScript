// Average of the odd numbers in an array

function avgOdd(numbers){
    let sum=0;
    let count=0;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] %2 ===1){
            sum += numbers[i];
            count ++;
        }
    }
    const avg = sum / count;
    return avg;
}

const oddNumbers = avgOdd([1,2,3,4,5,6,7,8,9]);
console.log(oddNumbers);