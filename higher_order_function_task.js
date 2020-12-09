//Write a function called getEvens that takes an array of numbers as an argument and returns a new array that only contains the even numbers from the original array.

const theNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const getEvens = function (arrayOfNumbers) {
    const result = [];

    arrayOfNumbers.forEach((number) => {
        
        if (number % 2 === 0) {
            result.push(number);
        }
    });

    return result;
};

console.log(getEvens(theNumbers));


//Write a function called sumElements that takes an array of numbers as an argument and returns the sum total of all the elements in the array.

const sumElements = function (arrayOfNumbers) {
    let total = 0;

    arrayOfNumbers.forEach((number) => {
        total += number;
    });

    return total;
};

const newNumbers = [1, 2, 3];
console.log(sumElements(newNumbers));