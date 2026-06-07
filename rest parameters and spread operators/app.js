// ==============================
// REST PARAMETER (...args)
// ==============================

// Example 1
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(10, 20, 30));           // 60
console.log(sum(1, 2, 3, 4, 5));        // 15

// Example 2
function studentInfo(name, age, ...skills) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Skills:", skills);
}

studentInfo("Ramish", 20, "HTML", "CSS", "JavaScript", "React");


// ==============================
// SPREAD OPERATOR (...)
// ==============================

// Example 1: Array Copy
let arr1 = [1, 2, 3];
let arr2 = [...arr1];

console.log(arr2);

// Example 2: Merge Arrays
let frontend = ["HTML", "CSS"];
let backend = ["Node.js", "MongoDB"];

let fullStack = [...frontend, ...backend];

console.log(fullStack);

// Example 3: Add Elements
let numbers = [2, 3, 4];
let newNumbers = [1, ...numbers, 5];

console.log(newNumbers);

// Example 4: Object Copy
let student = {
    name: "Ramish",
    age: 20
};

let studentCopy = {
    ...student
};

console.log(studentCopy);

// Example 5: Merge Objects
let person = {
    name: "Ramish"
};

let details = {
    city: "Karachi",
    country: "Pakistan"
};

let completeInfo = {
    ...person,
    ...details
};

console.log(completeInfo);

// Example 6: Convert String into Array
let name = "JavaScript";

let chars = [...name];

console.log(chars);

// Example 7: Pass Array Elements as Function Arguments
let nums = [10, 20, 30];

console.log(Math.max(...nums));


// ==============================
// REST + SPREAD TOGETHER
// ==============================

function multiply(multiplier, ...values) {
    return values.map(value => value * multiplier);
}

let data = [1, 2, 3, 4];

console.log(multiply(10, ...data));

// Output: [10, 20, 30, 40]