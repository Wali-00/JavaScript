const brand = {
    name: "samsung",
    model: "Galaxy S21",
    price: 799,
    isAvailable: true
};

for(const key in brand) {
    console.log(key + ": " + brand[key]);
}

const keys = Object.keys(brand);
console.log(keys); // output: ["name", "model", "price", "isAvailable"]

for(const key of keys) {
    console.log(key + ": " + brand[key]);
   // or console.log(key , ": " , brand[key]);
}

// declare of object
const person = {brand: "samsung", model: "Galaxy S21", price: 799, isAvailable: true};
const person1 = new Object({brand: "samsung", model: "Galaxy S21", price: 799, isAvailable: true});
const person2 = Object.create({brand: "samsung", model: "Galaxy S21", price: 799, isAvailable: true});
