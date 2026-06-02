
// ======================================================
// JAVASCRIPT EVENT LOOP - COMPLETE CODE EXAMPLES
// ======================================================



// ======================================================
// 1. SIMPLE CALL STACK EXAMPLE
// ======================================================

function one() {
    console.log("One");
}

function two() {
    console.log("Two");
}

one();
two();


// Output:
// One
// Two




// ======================================================
// 2. BASIC setTimeout EXAMPLE
// ======================================================

console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 2000);

console.log("End");


// Output:
// Start
// End
// Timer




// ======================================================
// 3. setTimeout WITH 0ms
// ======================================================

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");


// Output:
// A
// C
// B




// ======================================================
// 4. PROMISE VS setTimeout
// ======================================================

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");


// Output:
// Start
// End
// Promise
// Timeout




// ======================================================
// 5. async / await EXAMPLE
// ======================================================

async function hello() {
    console.log("1");

    await Promise.resolve();

    console.log("2");
}

console.log("3");

hello();

console.log("4");


// Output:
// 3
// 1
// 4
// 2




// ======================================================
// 6. MULTIPLE PROMISES & TIMERS
// ======================================================

console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1");
});

Promise.resolve().then(() => {
    console.log("Promise 2");
});

setTimeout(() => {
    console.log("Timeout 2");
}, 0);

console.log("End");


// Output:
// Start
// End
// Promise 1
// Promise 2
// Timeout 1
// Timeout 2




// ======================================================
// 7. EVENT LOOP INTERVIEW QUESTION
// ======================================================

console.log(1);

setTimeout(() => {
    console.log(2);
}, 0);

Promise.resolve().then(() => {
    console.log(3);
});

console.log(4);


// Output:
// 1
// 4
// 3
// 2




// ======================================================
// 8. MICROTASK PRIORITY EXAMPLE
// ======================================================

console.log("Script Start");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

queueMicrotask(() => {
    console.log("queueMicrotask");
});

Promise.resolve().then(() => {
    console.log("Promise.then");
});

console.log("Script End");


// Output:
// Script Start
// Script End
// queueMicrotask
// Promise.then
// setTimeout




// ======================================================
// 9. NESTED setTimeout
// ======================================================

console.log("Start");

setTimeout(() => {
    console.log("First Timeout");

    setTimeout(() => {
        console.log("Second Timeout");
    }, 0);

}, 0);

console.log("End");


// Output:
// Start
// End
// First Timeout
// Second Timeout




// ======================================================
// 10. NESTED PROMISES
// ======================================================

console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise 1");

    Promise.resolve().then(() => {
        console.log("Promise 2");
    });
});

console.log("End");


// Output:
// Start
// End
// Promise 1
// Promise 2




// ======================================================
// 11. CALLBACK QUEUE VS MICROTASK QUEUE
// ======================================================

console.log("Start");

setTimeout(() => {
    console.log("Macrotask");
}, 0);

Promise.resolve().then(() => {
    console.log("Microtask");
});

console.log("End");


// Output:
// Start
// End
// Microtask
// Macrotask




// ======================================================
// 12. ADVANCED EVENT LOOP EXAMPLE
// ======================================================

console.log("1");

setTimeout(() => {
    console.log("2");

    Promise.resolve().then(() => {
        console.log("3");
    });

}, 0);

Promise.resolve().then(() => {
    console.log("4");
});

console.log("5");


// Output:
// 1
// 5
// 4
// 2
// 3




// ======================================================
// 13. async/await WITH setTimeout
// ======================================================

async function test() {
    console.log("A");

    await Promise.resolve();

    console.log("B");
}

console.log("C");

setTimeout(() => {
    console.log("D");
}, 0);

test();

console.log("E");


// Output:
// C
// A
// E
// B
// D




// ======================================================
// 14. COMPLETE EXECUTION ORDER DEMO
// ======================================================

console.log("Script Start");

setTimeout(() => {
    console.log("Timeout 1");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1");
});

queueMicrotask(() => {
    console.log("Microtask");
});

setTimeout(() => {
    console.log("Timeout 2");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 2");
});

console.log("Script End");


// Output:
// Script Start
// Script End
// Promise 1
// Microtask
// Promise 2
// Timeout 1
// Timeout 2




// ======================================================
// IMPORTANT THEORY
// ======================================================

/*

CALL STACK
-----------
Executes synchronous code line by line.


WEB APIs
---------
Handles:
- setTimeout
- fetch
- DOM events
- geolocation


MICROTASK QUEUE
---------------
Higher priority queue.
Contains:
- Promise.then
- async/await
- queueMicrotask


CALLBACK QUEUE (MACROTASK QUEUE)
--------------------------------
Contains:
- setTimeout
- setInterval
- DOM events


EVENT LOOP
-----------
Checks:
"Is call stack empty?"

If yes:
1. Executes all microtasks
2. Executes one macrotask
3. Repeats forever


PRIORITY ORDER
---------------
1. Synchronous Code
2. Microtasks
3. Macrotasks


MEMORY TRICK
-------------
SYNC → MICROTASK → MACROTASK

*/