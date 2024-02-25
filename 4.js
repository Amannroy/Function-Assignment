// Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the
// amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
// function with various incomes.

function calculateTax(){
    // Defining tax rates based on income ranges using closure
    function taxCalculator(income){
        if(income <= 10000){
            return income * 0.1;
        } else if (income <= 50000){
            return income * 0.2;
        }else{
            return income * 0.3;
        }
    }
    return taxCalculator;
}

const taxCalculator = calculateTax();

const income1 = 8000;
const income2 = 30000;
const income3 = 60000;

console.log(`Tax for income $${income1}: $${taxCalculator(income1)}`);
console.log(`Tax for income $${income2}: $${taxCalculator(income2)}`);
console.log(`Tax for income $${income3}: $${taxCalculator(income3)}`);