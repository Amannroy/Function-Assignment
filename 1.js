//Q1. Create an arrow function called square that takes a number as an argument and returns its square. Use
//the arrow function to calculate the square of a given number and display the result.

// Creating an arrow function called square that takes a number as an argument and returns its square.
const square = (number) => {
    // The function body calculates the square of the number and returns the result.
    return number * number;
};

// Defining a variable called number and assign it the value 5.
const number = 5;

// Calling the square function with the number 5 as an argument and store the result in the variable result.
const result = square(number);

// Displaying the result using console.log(), incorporating template literals for better readability.
console.log(`The square of ${number} is ${result}`);
