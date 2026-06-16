// ==============================
// JavaScript Map - Complete Example
// ==============================

// Create a Map
const students = new Map();

// Add values
students.set("name", "Ramish");
students.set("age", 20);
students.set("course", "MERN Stack");

// Get values
console.log(students.get("name"));   // Ramish
console.log(students.get("age"));    // 20

// Check if key exists
console.log(students.has("course")); // true

// Size of Map
console.log(students.size); // 3

// Update value
students.set("age", 21);

// Delete a key
students.delete("course");

// Add more data
students.set("city", "Karachi");
students.set("country", "Pakistan");

// Loop through Map
for (let [key, value] of students) {
    console.log(`${key} : ${value}`);
}

// Loop using forEach
students.forEach((value, key) => {
    console.log(key, value);
});

// Convert Map to Array
const mapArray = [...students];
console.log(mapArray);

// Create Map from Array
const newMap = new Map([
    ["HTML", 90],
    ["CSS", 85],
    ["JavaScript", 95]
]);

console.log(newMap);

// Clear all data
// newMap.clear();

// Example: Store student records
const studentData = new Map();

studentData.set(1, {
    name: "Ali",
    age: 19,
    marks: 88
});

studentData.set(2, {
    name: "Ahmed",
    age: 20,
    marks: 92
});

studentData.set(3, {
    name: "Ramish",
    age: 21,
    marks: 95
});

for (let [id, student] of studentData) {
    console.log(
        `ID: ${id}, Name: ${student.name}, Age: ${student.age}, Marks: ${student.marks}`
    );
}