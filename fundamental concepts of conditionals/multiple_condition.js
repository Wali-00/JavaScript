const age = 18;
const hasParentalConsent = true;

if (age >= 18 && hasParentalConsent) {
    console.log("You are allowed to participate.");
}

else if (age >= 18 || hasParentalConsent) {
    console.log("You are allowed to participate with some restrictions.");
}

else {
    console.log("You are not allowed to participate.");
}

// nested if else structure:

const score = 85;
if (score >= 90) {
    if (score >= 95) {
        console.log("You got an A+");
    }
}

