function getData(dataId, nextData) {
    setTimeout(() => {
        console.log("Data:", dataId);
        if (nextData) {
            nextData();
        }
    }, 2000);
}

getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});




function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data:", dataId);
            resolve("Success");
        }, 2000);
    });
}

getData(1)
    .then(() => {
        return getData(2);
    })
    .then(() => {
        return getData(3);
    })
    .then(() => {
        return getData(4);
    })
    .catch((error) => {
        console.log(error);
    });




    function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data:", dataId);
            resolve("Success");
        }, 2000);
    });
}

async function fetchData() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
}

fetchData();