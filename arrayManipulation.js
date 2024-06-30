// arrayManipulation.js

function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num; // Square even numbers
        } else {
            return num * 3; // Triple odd numbers
        }
    });
}

// Example usage:
// const numbers = [1, 2, 3, 4, 5];
// console.log(processArray(numbers)); // [3, 4, 9, 16, 15]

module.exports = { processArray };
// arrayManipulation.js

function formatArrayStrings(strings, processedNumbers) {
    return strings.map((str, index) => {
        if (processedNumbers[index] % 2 === 0) {
            return str.toUpperCase(); // Capitalize if the number is even
        } else {
            return str.toLowerCase(); // Convert to lowercase if the number is odd
        }
    });
}

// Example usage:
// const strings = ["Hello", "World", "JavaScript", "React"];
// const processedNumbers = processArray([1, 2, 3, 4]);
// console.log(formatArrayStrings(strings, processedNumbers)); // ["hello", "WORLD", "javascript", "REACT"]

module.exports = { processArray, formatArrayStrings };
