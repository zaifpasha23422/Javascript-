// const userEmail = "zaifpasha@gmail.com"

// if(userEmail){
//     console.log("got user email")
// }
// else{
//     console.log("does not have email")
// }

// falsy values 
// false , 0 , -0 , BigInt 0n, null , undefined, NaN

// truthy values  (except all falsy values)
// "0" , 'false', " space" , [] , {} , function(){} 
// false == 0 , false = '' , 0==''  these gives true values

// const email = []
// if (email.length ===0){
//     console.log("Array is empty")
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length===0){
//     console.log("Object is empty")  
// }

// Nullish Coalesching Operator (??) : null undefined 

// let val1;
// val1 = 5 ?? 10
// val1 = null?? 10
// val1 = undefined ?? 5
// console.log(val1);

// Terniary opertaor 

// condition ? true : false

const iceTeaPrize = 100
iceTeaPrize <= 80 ? console.log("less than 80") : console.log("more than 80")