// ===============================
// Exponentiation Operator (**)
// ===============================

// Basic Example
let num1 = 2;
let result1 = num1 ** 3; // 2³
console.log("2 ** 3 =", result1);

// Square
let num2 = 5;
console.log("5² =", num2 ** 2);

// Cube
let num3 = 4;
console.log("4³ =", num3 ** 3);

// Power of Zero
console.log("10⁰ =", 10 ** 0);

// Negative Power
console.log("2⁻² =", 2 ** -2);

// Decimal Power (Square Root)
console.log("16^(1/2) =", 16 ** 0.5);

// Variables Example
let base = 3;
let exponent = 4;
let answer = base ** exponent;
console.log(`${base} ** ${exponent} = ${answer}`);

// Exponentiation Assignment Operator (**=)
let points = 2;
points **= 3; // points = points ** 3
console.log("points =", points);

// Array Example
let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(num => num ** 2);
console.log("Squares:", squares);

let cubes = numbers.map(num => num ** 3);
console.log("Cubes:", cubes);

// Function Example
function power(base, exponent) {
    return base ** exponent;
}

console.log(power(2, 5)); // 32
console.log(power(10, 2)); // 100

// Comparison with Math.pow()
console.log(Math.pow(2, 4)); // Old Method
console.log(2 ** 4);         // Modern Method

// Real-Life Example (Compound Growth)
let principal = 1000;
let rate = 1.10; // 10% growth
let years = 3;

let amount = principal * (rate ** years);
console.log("Final Amount =", amount);