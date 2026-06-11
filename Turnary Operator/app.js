// ==============================
// TERNARY OPERATOR IN JAVASCRIPT
// ==============================

// Basic Example
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

// Even or Odd
let num = 7;
console.log(num % 2 === 0 ? "Even" : "Odd");

// Positive or Negative
let number = -10;
console.log(number >= 0 ? "Positive" : "Negative");

// Pass or Fail
let marks = 45;
let status = marks >= 50 ? "Pass" : "Fail";
console.log(status);

// Voting Eligibility
let userAge = 17;
console.log(userAge >= 18 ? "Can Vote" : "Cannot Vote");

// Login Status
let isLoggedIn = true;
console.log(isLoggedIn ? "Welcome Back!" : "Please Login");

// Discount Check
let purchaseAmount = 1200;
let discount = purchaseAmount >= 1000 ? "10% Discount" : "No Discount";
console.log(discount);

// Day or Night
let hour = 14;
console.log(hour < 12 ? "Good Morning" : "Good Evening");

// Maximum of Two Numbers
let a = 25;
let b = 15;
let max = a > b ? a : b;
console.log("Max:", max);

// Minimum of Two Numbers
let min = a < b ? a : b;
console.log("Min:", min);

// Nested Ternary Operator
let score = 85;
let grade =
  score >= 90 ? "A+" :
  score >= 80 ? "A" :
  score >= 70 ? "B" :
  score >= 60 ? "C" :
  "Fail";

console.log("Grade:", grade);

// Check Empty String
let username = "";
console.log(username ? "Username Found" : "Username Missing");

// Boolean Conversion
let value = "JavaScript";
console.log(value ? "Truthy Value" : "Falsy Value");

// Theme Switch
let darkMode = true;
let theme = darkMode ? "Dark Theme" : "Light Theme";
console.log(theme);

// Temperature Check
let temp = 35;
console.log(temp > 30 ? "Hot Weather" : "Cool Weather");

// Online Status
let online = false;
console.log(online ? "User Online" : "User Offline");

// Stock Availability
let stock = 0;
console.log(stock > 0 ? "In Stock" : "Out of Stock");

// Largest of Three Numbers
let x = 10;
let y = 20;
let z = 30;

let largest =
  x > y
    ? (x > z ? x : z)
    : (y > z ? y : z);

console.log("Largest:", largest);

// Function with Ternary
function checkNumber(n) {
  return n > 0 ? "Positive" : n < 0 ? "Negative" : "Zero";
}

console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));

// Ternary in Template Literals
let salary = 50000;
console.log(`Employee is ${salary >= 40000 ? "Well Paid" : "Underpaid"}`);

// Null Check
let user = null;
console.log(user ? user : "No User Found");

// Multiple Conditions
let percentage = 72;
let division =
  percentage >= 80 ? "Distinction" :
  percentage >= 60 ? "First Division" :
  percentage >= 50 ? "Second Division" :
  "Fail";

console.log(division);