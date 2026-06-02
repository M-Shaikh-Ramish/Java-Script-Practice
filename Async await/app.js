async function myFunction() {
    return "Hello World";
}

myFunction().then((result) => {
    console.log(result);
});


function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Received");
        }, 2000);
    });
}

async function fetchData() {
    console.log("Fetching data...");

    let result = await getData();

    console.log(result);
    console.log("Task Completed");
}

fetchData();



async function getUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        let data = await response.json();

        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getUsers();