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


const myOtherNumbers = [21, 22, 23, 24, 25];
// Using higher-order function, forEach(), being passed an anonymous function. Syntax: 
//
//          arr.forEach(callback(currentValue[, index[, array]]){
//                          execute something
//          }[, thisArg]);
//
/*

callback
    Function to execute on each element. It accepts between one and three arguments:
currentValue
    The current element being processed in the array.
index Optional
    The index of currentValue in the array.
array Optional
    The array forEach() was called upon.
thisArg Optional
    Value to use as this when executing callback.

*/
myOtherNumbers.forEach((theNumber) => {
    console.log(`This is number ${theNumber}`);
});


myNumbers.forEach((theNumber, index) => {
    console.log(`This is number ${theNumber} at index ${index}`);
});



// Write a function that mulitplies each number in an array by two and returns a new array

const multiplyByTwo = function (numbersArray) {
    const result = [];

    numbersArray.forEach((aNumber) => {
        const multiplied = aNumber * 2;
        result.push(multiplied);
    });

    return result;
}

console.log(multiplyByTwo(myNumbers));