const ourForEach = function (array, callback) {
    for (const element of array) {
        callback(element);
    }
}

myNumbers = [1, 2, 3, 4];

ourForEach(myNumbers, (number) => {
    console.log(`This is number ${number}`);
});