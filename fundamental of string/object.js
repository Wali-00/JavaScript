// object structure
const person = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
};
console.log(person.name); // output: John Doe
console.log(person.age); // output: 30
console.log(person.email); // output: john.doe@example.com

// nested object structure
const company = {
    name: "Tech Solutions",
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    },
    'fav places': ["Park", "Beach", "Museum"]
};
console.log(company.address.street); // output: 123 Main St

console.log(company.address["city"]); // output: Anytown
// In JavaScript, objects can be accessed using dot notation (object.property) or bracket notation (object["property"]). Both notations allow you to retrieve the value of a property from an object. Dot notation is more concise and is commonly used when the property name is a valid identifier. Bracket notation is useful when the property name contains spaces, special characters, or is stored in a variable. In the example above, we access the "street" property using dot notation and the "city" property using bracket notation.

console.log(company['fav places'][1]); // output: Beach

console.log(company['fav places']); // output: ["Park", "Beach", "Museum"]

