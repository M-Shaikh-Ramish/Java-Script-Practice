// function hello() {
//     console.log("hello");
// }

// setTimeout(hello,2000);


//====================asyncrounus programming===============================//

// console.log("one");
// console.log("two");

// function hello() {
//     console.log("hello");
// }
// setTimeout(hello,9000);

// console.log("three");
// console.log("four");

//============Callback=======================//

// function sum (a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sum){
//     sum(a,b)
// }

// calculator(1,2 , sum);


//===============callbackHell=====================//


// function getdata (dataId,getNextData){
//     setTimeout(() => { 
//         console.log("data",dataId);
//         if (getNextData){
//             getNextData();
//         }
//     },2000);
// }


// //call back hell

// getdata(1, () =>{
//     getdata(2, () => {
//         getdata(3,() =>{
//             getdata(4);
//         });
//     });
// });








