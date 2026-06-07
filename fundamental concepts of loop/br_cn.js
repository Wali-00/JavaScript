const num = [1, 2, 3, 4, 5];

for(let i=0; i<num.length; i++){
    if(i === 2){
        continue; // skip the current iteration when i is 2
    }
    console.log(num[i]);
}

for(let i=0; i<num.length; i++){
    if(i === 3){
        break; // exit the loop when i is 3
    }
    console.log(num[i]);
}