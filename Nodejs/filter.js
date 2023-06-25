const arr = [2,3,5,6,4,2,1,2,4];

// console.log(arr)
let result = arr.filter((item)=>{
// console.log(item)
    return item<4;
})
console.log(result);