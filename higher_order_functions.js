// Higher Order Function - a function that either takes another function as an argument OR returns a function.

// Callback - a function that is passed to another function as an argument.

/*
// Write a function that adds 2 numbers

// named function
function add(a ,b) {
    return a + b;
}

// anonymous function (on the right-hand side of the '=' sign)
const add = function (a ,b) {
    return a + b;
}


// arrow functions (on the right-hand side of the '=' sign)

const add = (a, b) => {
    return a + b;
}

const add = (a, b) => a + b;


// write a function that prints a string

function print(str) {
    console.log(str);
}

// Arrow functions doing the same thing as the one above
(str) => console.log(str)
str => console.log(str)

*/

// Enumeration

const myNumbers = [1, 2, 3, 4, 5];

for (const number of myNumbers) {
    console.log(`This is number ${number}`);
}


// Using higher-order function, forEach()
myNumbers.forEach((theNumber) => {
    console.log(`This is number ${theNumber}`)
});