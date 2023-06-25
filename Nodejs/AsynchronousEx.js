//asynchronous example

console.log("First Code");

setTimeout(()=>{
    console.log("Second Code");

},2000)
console.log("Third Code");


//DisAdvantage Of Asynchronous Language

let a = 10;
let b = 0;

setTimeout(()=>{
    b = 20;
},2000)

console.log(a+b)