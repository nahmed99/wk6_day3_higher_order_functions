
const myNumbers = [11, 12, 13, 14, 15];


// Write a function that mulitplies each number in an array by two and returns a new array - using 'map'

const multiplyByTwo = function (numbersArray) {
    const result = numbersArray.map((number) => {
        return number * 2
    });

    return result;
}

console.log(multiplyByTwo(myNumbers));


// Using 'filter'
const theNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getEvens = function (arrayOfNumbers) {
    const result = arrayOfNumbers.filter((number) => {
        return number % 2 === 0;  // from inside the callback
    });

    return result; //from this function
};

console.log(getEvens(theNumbers));


//Using 'reduce'

const sumElements = function (arrayOfNumbers) {
    const total = arrayOfNumbers.reduce((runningTotal, number) => {
        return runningTotal + number;  //running total at current index
    }, 0);  //the starting total - to add on top of - we're using 0 in this case.

    return total;  // total will hold the complete total
};

const newNumbers = [1, 2, 3];
console.log(sumElements(newNumbers));