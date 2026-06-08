// ================= TEMPLATE LITERALS COMPLETE GUIDE =================

// Template Literals use Backticks (` `) instead of Quotes (" " or ' ')

// ----------------------------------------------------
// 1. Basic Template Literal
// ----------------------------------------------------

let name = "Ramish";

console.log(`Hello ${name}`);


// ----------------------------------------------------
// 2. Multiple Variables
// ----------------------------------------------------

let firstName = "Muhammad";
let lastName = "Ramish";
let age = 20;

console.log(`My name is ${firstName} ${lastName} and I am ${age} years old.`);


// ----------------------------------------------------
// 3. Expressions Inside ${}
// ----------------------------------------------------

let a = 10;
let b = 20;

console.log(`Sum = ${a + b}`);
console.log(`Multiply = ${a * b}`);
console.log(`Division = ${b / a}`);


// ----------------------------------------------------
// 4. Function Call Inside Template Literal
// ----------------------------------------------------

function greet(user){
    return `Welcome ${user}`;
}

console.log(`${greet("Ramish")}`);


// ----------------------------------------------------
// 5. Multi-Line Strings
// ----------------------------------------------------

let message = `
Hello Ramish
Welcome to JavaScript
Learning Template Literals
`;

console.log(message);


// ----------------------------------------------------
// 6. Ternary Operator Inside Template Literal
// ----------------------------------------------------

let marks = 85;

console.log(`Result: ${marks >= 50 ? "Pass" : "Fail"}`);


// ----------------------------------------------------
// 7. Object Values
// ----------------------------------------------------

const student = {
    name: "Ramish",
    age: 20,
    course: "MERN Stack"
};

console.log(`
Name: ${student.name}
Age: ${student.age}
Course: ${student.course}
`);


// ----------------------------------------------------
// 8. Array Values
// ----------------------------------------------------

const skills = ["HTML", "CSS", "JavaScript", "React"];

console.log(`
Skill 1: ${skills[0]}
Skill 2: ${skills[1]}
Skill 3: ${skills[2]}
Skill 4: ${skills[3]}
`);


// ----------------------------------------------------
// 9. Loop With Template Literals
// ----------------------------------------------------

const fruits = ["Apple", "Mango", "Banana"];

for(const fruit of fruits){
    console.log(`I like ${fruit}`);
}


// ----------------------------------------------------
// 10. HTML Creation Using Template Literals
// ----------------------------------------------------

let username = "Ramish";
let city = "Karachi";

let html = `
<div class="card">
    <h1>${username}</h1>
    <p>${city}</p>
</div>
`;

console.log(html);


// ----------------------------------------------------
// 11. Nested Template Literals
// ----------------------------------------------------

let user = "Ramish";
let status = true;

console.log(`
User: ${user}
Status: ${status ? `Active User` : `Inactive User`}
`);


// ----------------------------------------------------
// 12. Dynamic Table Row Creation
// ----------------------------------------------------

const product = {
    id: 1,
    name: "Laptop",
    price: 100000
};

let row = `
<tr>
    <td>${product.id}</td>
    <td>${product.name}</td>
    <td>${product.price}</td>
</tr>
`;

console.log(row);


// ----------------------------------------------------
// 13. Using map() With Template Literals
// ----------------------------------------------------

const users = ["Ali", "Ahmed", "Ramish"];

let userList = users.map(user => `<li>${user}</li>`);

console.log(userList);


// ----------------------------------------------------
// 14. Join Method With Template Literals
// ----------------------------------------------------

let list = `
<ul>
    ${users.map(user => `<li>${user}</li>`).join("")}
</ul>
`;

console.log(list);


// ----------------------------------------------------
// 15. Complete Real World Example
// ----------------------------------------------------

const employee = {
    name: "Muhammad Shaikh Ramish",
    age: 20,
    city: "Karachi",
    profession: "Frontend Developer",
    skills: ["HTML", "CSS", "JavaScript", "React"]
};

let profile = `
=================================================
                EMPLOYEE PROFILE
=================================================

Name       : ${employee.name}
Age        : ${employee.age}
City       : ${employee.city}
Profession : ${employee.profession}

Skills:
${employee.skills.map(skill => `- ${skill}`).join("\n")}

Status:
${employee.age >= 18 ? "Adult" : "Minor"}

Message:
Welcome ${employee.name}! You are a ${employee.profession}
from ${employee.city}.

=================================================
`;

console.log(profile);


// ----------------------------------------------------
// WHY TEMPLATE LITERALS ARE USED?
// ----------------------------------------------------

/*
1. String Concatenation se bachne ke liye
2. Variables directly insert karne ke liye
3. Multi-line strings likhne ke liye
4. HTML dynamically generate karne ke liye
5. Expressions aur Functions use karne ke liye
6. React aur Modern JavaScript mein bohat use hote hain

Backticks: ` `
Variable: ${variable}
Expression: ${10 + 20}
Function: ${greet("Ramish")}
Condition: ${age >= 18 ? "Adult" : "Minor"}
*/