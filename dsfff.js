
// function kaam1(callback){
//     setTimeout(()=>{
//         console.log("kaam1 hogaya");
//         callback();
//     },1000);
// }


// function kaam1(callback){
//     setTimeout(()=>{
//         console.log("kaam1 hogaya");
//         callback();
//     },1000);
// }


// function kaam3(callback){
//     setTimeout(()=>{
// console.log(kaam3 hogaya);
//     callback();
//     },1000);
// }



// function demo(cb){
//     for (let i = 1; i < 100 ; i++) {
//        console.log(i);  
//     }
//     cb();
// }

// function product(){
//    console.log("for loop ended")
// }

// demo(product);





// function getData(dataId){
//     return new Promise((resolve,reject){
//         setTimeout(() => {
//             console.log("data",dataId);
//             resolve("Success");
//         }, 2000);
//     });
// }

// // callback hell
// getData((1)=>{
//     console.log("getting data2...");
//     getData(2()=>{
//         console.log("getting data3...");
//         getData(3()=>{
//             console.log("getting data4...");
//             getData(4);
//         });
//     });
// });

// promise chain
// getData(1);
// .then((res)=>{
//     return getData(2);
// });
// .then((res)=>{
//     return getData(3);
// });
// .then((res)=>{
//     console.log("res");
// });

// async-await
// async function getallData() {
//    console.log("getting Data1...")
//     await getData(1);
//     console.log("getting Data2...")
//     await getData(2);
//     console.log("getting Data3...")
//     await getData(3);
//     console.log("getting Data4...")
//     await getData(4);
//     console.log("getting Data5...")
//     await getData(5);
// }



function table(num) {
  console.log("multiplication")
  if (num) {
    for (let j = 2; j <= num; j++) {
      for (let i = 1; i <= 10; i++) {
        console.log(`${j} x ${i} = ${j * i} `);
      };
      console.log('--------------------------')

    }
  }

  else {
    console.log("please pass the parameter")
  }
}
table(num)