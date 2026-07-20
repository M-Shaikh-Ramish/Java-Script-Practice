// console.log("=========> javascript is running");


// const promise = new Promise((resolve, reject) => {
    
//     let successs = "false";

//     if (success) {
//         resolve ("login success full")
//     } else {
//         reject("error")
//     }
 
// })


//    promise.then((result) => {
//     console.log(result);
// });

// promise.catch((error) => {
//     console.log(error);
// });

// promise.then((result) => {
//     console.log(result);
    
// });

// promise.catch((error) => {
//     console.log(error);
// });





const promise = new Promise((resolve,reject) =>{


    let shaadikarishta = true;

      if (shaadikarishta){
        resolve("larkii ny mannn liaa");
      } else {
        reject("aap ky padd civic nahi hai");
      }

      
});

promise.then((result) => {
        console.log(result);
        
      })

      promise.catch((error) => {
        console.log(error);
        
      })