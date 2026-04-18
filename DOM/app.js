// var id = document.getElementById("myid");
// console.log(id);
// console.log(id.tagName);
// console.log(id.innerText);
// console.log(id.innerHTML);
// console.log(id.textContent);


// var para = document.getElementsByClassName("para");
// console.log(para);

// var tag = document.getElementsByTagName("p");
// console.log(tag);

// var select = document.querySelector(".para");
// console.log(select);

// var selects = document.querySelectorAll(".para");
// console.log(selects);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// let para = document.querySelector("p");
// console.log(para.setAttribute("class" , "new"));

// let par = document.querySelector("p");
// console.log(par.getAttribute("class"));


// let div = document.querySelector("div");
// div.style.backgroundColor = "green";
// div.style.color = "red";
// div.style.fontSize = "26px";


let newheading = document.createElement("h1");
newheading.innerText = "I AM RAMISH";

document.querySelector("body").prepend(newheading);


let para = document.querySelector("p");
para.remove();

