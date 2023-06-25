let a = 20;
let b = 0;

// let waitingData = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         b = 30;
//         resolve(b);
// },2000)
// })

// waitingData.then((data)=>{
//     b = data;
//     console.log(a+b)
// })

let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(40);
    },2000)
})

waitingData.then((data)=>{
    b = data;
    console.log(a+b)
})