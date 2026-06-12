fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data => {
    console.log(data);
    let tableData = "";
    data.map((items) => {
        tableData += `
        <tr>
            <td>${items.title}</td>
            <td>${items.category}</td>
            <td>${items.description}</td>
            <td>${items.price}</td>
            <td><img src="${items.image}" height="200px" width="200px"/></td>
        </tr>`;
    });
    document.getElementById("table-body").innerHTML = tableData;
});