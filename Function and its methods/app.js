
// ==========================================
// 1. FUNCTION DECLARATION (Named Function)
// ==========================================

function greet(name) {
    return "Hello " + name;
}

console.log(greet("Ramish"));



// ==========================================
// 2. FUNCTION EXPRESSION
// ==========================================

const sayHi = function(name) {
    return "Hi " + name;
};

console.log(sayHi("Ali"));



// ==========================================
// 3. NAMED FUNCTION EXPRESSION
// ==========================================

const multiply = function multiplyNumbers(a, b) {
    return a * b;
};

console.log(multiply(4, 5));



// ==========================================
// 4. ARROW FUNCTION
// ==========================================

const add = (a, b) => {
    return a + b;
};

console.log(add(2, 3));



// ==========================================
// 5. SHORT ARROW FUNCTION
// ==========================================

const square = num => num * num;

console.log(square(6));



// ==========================================
// 6. ANONYMOUS FUNCTION
// ==========================================

setTimeout(function() {
    console.log("Anonymous Function");
}, 1000);



// ==========================================
// 7. IMMEDIATELY INVOKED FUNCTION (IIFE)
// ==========================================

(function() {
    console.log("IIFE Executed");
})();



// ==========================================
// 8. CALLBACK FUNCTION
// ==========================================

function processUser(name, callback) {
    callback(name);
}

processUser("Ahmed", function(name) {
    console.log("Welcome " + name);
});



// ==========================================
// 9. HIGHER ORDER FUNCTION
// ==========================================

function calculator(a, b, operation) {
    return operation(a, b);
}

const result = calculator(5, 3, function(x, y) {
    return x + y;
});

console.log(result);



// ==========================================
// 10. CONSTRUCTOR FUNCTION
// ==========================================

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const user1 = new Person("Ramish", 20);

console.log(user1);



// ==========================================
// 11. METHOD FUNCTION (Object Method)
// ==========================================

const student = {
    name: "Ali",

    greet: function() {
        console.log("Hello " + this.name);
    }
};

student.greet();



// ==========================================
// 12. SHORTHAND METHOD
// ==========================================

const car = {
    brand: "Toyota",

    start() {
        console.log(this.brand + " Started");
    }
};

car.start();



// ==========================================
// 13. GENERATOR FUNCTION
// ==========================================

function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}

const num = numbers();

console.log(num.next());
console.log(num.next());



// ==========================================
// 14. RECURSIVE FUNCTION
// ==========================================

function factorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5));



// ==========================================
// 15. ASYNC FUNCTION
// ==========================================

async function fetchData() {
    return "Data Loaded";
}

fetchData().then(data => console.log(data));



// ==========================================
// 16. NESTED FUNCTION
// ==========================================

function outerFunction() {

    function innerFunction() {
        console.log("Inner Function");
    }

    innerFunction();
}

outerFunction();



// ==========================================
// 17. SELF INVOKING ARROW FUNCTION
// ==========================================

(() => {
    console.log("Self Invoked Arrow Function");
})();



// ==========================================
// 18. DEFAULT PARAMETER FUNCTION
// ==========================================

function welcome(name = "Guest") {
    console.log("Welcome " + name);
}

welcome();
welcome("Ramish");



// ==========================================
// 19. REST PARAMETER FUNCTION
// ==========================================

function total(...numbers) {

    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

console.log(total(1, 2, 3, 4));



// ==========================================
// 20. FUNCTION WITH RETURN
// ==========================================

function getAge() {
    return 20;
}

console.log(getAge());



// ==========================================
// 21. FUNCTION WITHOUT RETURN
// ==========================================

function showMessage() {
    console.log("No Return Function");
}

showMessage();



// ==========================================
// 22. FIRST CLASS FUNCTION
// ==========================================

function hello() {
    console.log("Hello");
}

const anotherFunction = hello;

anotherFunction();



// ==========================================
// 23. PURE FUNCTION
// ==========================================

function pureAdd(a, b) {
    return a + b;
}

console.log(pureAdd(10, 20));



// ==========================================
// 24. IMPURE FUNCTION
// ==========================================

let count = 0;

function increase() {
    count++;
}

increase();

console.log(count);



// ==========================================
// 25. CLOSURE FUNCTION
// ==========================================

function counter() {

    let value = 0;

    return function() {
        value++;
        console.log(value);
    };
}

const increment = counter();

increment();
increment();



// ==========================================
// 26. FUNCTION USING bind()
// ==========================================

const person = {
    name: "Ramish"
};

function intro() {
    console.log("My name is " + this.name);
}

const boundFunction = intro.bind(person);

boundFunction();



// ==========================================
// 27. FUNCTION USING call()
// ==========================================

function greetUser(city) {
    console.log(this.name + " from " + city);
}

const user = {
    name: "Ali"
};

greetUser.call(user, "Karachi");



// ==========================================
// 28. FUNCTION USING apply()
// ==========================================

greetUser.apply(user, ["Lahore"]);



// ==========================================
// 29. FUNCTION INSIDE ARRAY
// ==========================================

const functions = [
    function() {
        console.log("Function 1");
    },

    function() {
        console.log("Function 2");
    }
];

functions[0]();



// ==========================================
// 30. CLASS METHOD
// ==========================================

class Animal {

    speak() {
        console.log("Animal Speaks");
    }
}

const dog = new Animal();

dog.speak();
