//Q6. Write a JavaScript function called curry that takes a function as an argument and returns a curried
//version of that function. The curried function should accept arguments one at a time and return a new
//function until all arguments are provided. Then, it should execute the original function with all arguments.
//Test the curry function with a function that adds two numbers.

function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function(...nextArgs) {
                return curried(...args.concat(nextArgs));
            };
        }
    };
}

// Test the curry function with a function that adds two numbers
function add(x, y) {
    return x + y;
}

const curriedAdd = curry(add);

// Test curriedAdd function
console.log(curriedAdd(3)(4)); // Output: 7
console.log(curriedAdd(5)(6)); // Output: 11
console.log(curriedAdd(2, 8)); // Output: 10 (All arguments provided at once)
