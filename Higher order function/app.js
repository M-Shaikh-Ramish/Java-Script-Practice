// ==============================
// HIGHER-ORDER FUNCTIONS IN JS
// ==============================

// 1. Function as Argument
function greet(name) {
    return `Hello ${name}`;
}

function processUser(callback, userName) {
    console.log(callback(userName));
}

processUser(greet, "Ramish");


// 2. Function Returning Function
function multiplyBy(num) {
    return function(value) {
        return value * num;
    };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(10)); // 20
console.log(triple(10)); // 30


// 3. map() - Transform Array
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(function(num) {
    return num * num;
});

console.log("Squares:", squares);


// 4. filter() - Filter Array
const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log("Even Numbers:", evenNumbers);


// 5. reduce() - Reduce Array to Single Value
const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log("Sum:", sum);


// 6. Custom Higher-Order Function
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

console.log("Addition:", calculate(10, 5, add));
console.log("Subtraction:", calculate(10, 5, subtract));
console.log("Multiplication:", calculate(10, 5, multiply));
console.log("Division:", calculate(10, 5, divide));


// 7. Arrow Function with Higher-Order Function
const fruits = ["apple", "banana", "mango", "orange"];

fruits.forEach(fruit => {
    console.log(fruit.toUpperCase());
});


// 8. Sorting Using Higher-Order Function
const ages = [25, 18, 40, 12, 30];

ages.sort((a, b) => a - b);

console.log("Sorted Ages:", ages);


// 9. Returning Function Example
function createGreeting(message) {
    return function(name) {
        console.log(`${message}, ${name}!`);
    };
}

const sayHi = createGreeting("Hi");
const sayWelcome = createGreeting("Welcome");

sayHi("Ramish");
sayWelcome("Ali");


// 10. Real-World Example
function authenticate(role) {
    return function(userName) {
        console.log(`${userName} logged in as ${role}`);
    };
}

const adminLogin = authenticate("Admin");
const userLogin = authenticate("User");

adminLogin("Ramish");
userLogin("Ahmed");