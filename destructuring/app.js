// ===============================
// JAVASCRIPT DESTRUCTURING - ALL IN ONE
// ===============================

// 1. Array Destructuring
let fruits = ["Apple", "Banana", "Mango"];

let [first, second, third] = fruits;

console.log("Array Destructuring:");
console.log(first);
console.log(second);
console.log(third);

// ===============================

// 2. Skipping Values

let colors = ["Red", "Green", "Blue", "Black"];

let [color1, , color3] = colors;

console.log("\nSkipping Values:");
console.log(color1);
console.log(color3);

// ===============================

// 3. Default Values

let numbers = [10];

let [a, b = 20] = numbers;

console.log("\nDefault Values:");
console.log(a);
console.log(b);

// ===============================

// 4. Swapping Variables

let x = 10;
let y = 20;

[x, y] = [y, x];

console.log("\nSwapping Variables:");
console.log(x);
console.log(y);

// ===============================

// 5. Rest Operator in Array

let nums = [1, 2, 3, 4, 5];

let [n1, n2, ...remaining] = nums;

console.log("\nRest Operator:");
console.log(n1);
console.log(n2);
console.log(remaining);

// ===============================

// 6. Object Destructuring

let student = {
  name: "Ramish",
  age: 20,
  city: "Karachi"
};

let { name, age, city } = student;

console.log("\nObject Destructuring:");
console.log(name);
console.log(age);
console.log(city);

// ===============================

// 7. Renaming Variables

let user = {
  username: "Ramish",
  userAge: 20
};

let {
  username: myName,
  userAge: myAge
} = user;

console.log("\nRenaming Variables:");
console.log(myName);
console.log(myAge);

// ===============================

// 8. Default Values in Object

let person = {
  fullName: "Ali"
};

let {
  fullName,
  country = "Pakistan"
} = person;

console.log("\nObject Default Values:");
console.log(fullName);
console.log(country);

// ===============================

// 9. Nested Object Destructuring

let employee = {
  empName: "Ahmed",
  address: {
    cityName: "Karachi",
    countryName: "Pakistan"
  }
};

let {
  address: {
    cityName,
    countryName
  }
} = employee;

console.log("\nNested Object:");
console.log(cityName);
console.log(countryName);

// ===============================

// 10. Nested Array Destructuring

let data = [1, 2, [3, 4]];

let [d1, d2, [d3, d4]] = data;

console.log("\nNested Array:");
console.log(d1);
console.log(d2);
console.log(d3);
console.log(d4);

// ===============================

// 11. Function Parameter Destructuring

function printUser({ userName, userCity }) {
  console.log("\nFunction Object Destructuring:");
  console.log(userName);
  console.log(userCity);
}

printUser({
  userName: "Ramish",
  userCity: "Karachi"
});

// ===============================

// 12. Array Parameter Destructuring

function showNumbers([num1, num2]) {
  console.log("\nFunction Array Destructuring:");
  console.log(num1);
  console.log(num2);
}

showNumbers([100, 200]);

// ===============================

// 13. Object Rest Operator

let info = {
  id: 1,
  user: "Ramish",
  city: "Karachi",
  country: "Pakistan"
};

let { id, ...otherInfo } = info;

console.log("\nObject Rest Operator:");
console.log(id);
console.log(otherInfo);

// ===============================

// 14. Destructuring Returned Array

function getColors() {
  return ["Red", "Green", "Blue"];
}

let [c1, c2, c3] = getColors();

console.log("\nReturned Array:");
console.log(c1);
console.log(c2);
console.log(c3);

// ===============================

// 15. Destructuring Returned Object

function getUser() {
  return {
    userName: "Ramish",
    age: 20
  };
}

let {
  userName,
  age: userAge
} = getUser();

console.log("\nReturned Object:");
console.log(userName);
console.log(userAge);

// ===============================

// 16. Advanced Real World Example

const developer = {
  fullName: "Muhammad Shaikh Ramish",
  age: 20,
  skills: ["HTML", "CSS", "JavaScript"],
  address: {
    city: "Karachi",
    country: "Pakistan"
  }
};

const {
  fullName: devName,
  skills: [skill1, skill2, skill3],
  address: { city: devCity, country: devCountry }
} = developer;

console.log("\nReal World Example:");
console.log(devName);
console.log(skill1);
console.log(skill2);
console.log(skill3);
console.log(devCity);
console.log(devCountry);

// ===============================
// END OF DESTRUCTURING
// ===============================