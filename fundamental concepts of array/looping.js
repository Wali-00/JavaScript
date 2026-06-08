const friends = ['Michael', 'Steven', 'Peter'];

for(const friend of friends) {
    console.log(friend);
}

for(let i = 0; i < friends.length; i++) {
    console.log(i, ":", friends[i]);
}

let i = 0;
while(i < friends.length) {
    console.log(i, ":", friends[i]);
    i++;
}

