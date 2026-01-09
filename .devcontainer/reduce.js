const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc, cv){
//     console.log(`acc: ${acc} and cv: ${cv}`)
//     return acc + cv
// }, 0)
// console.log(myTotal);

// const myTotal = myNums.reduce((acc, cv)=> acc+cv, 0)
// console.log(myTotal)

// let sum =0
// myNums.forEach((item)=>{
//     sum +=item;
// })
// console.log(sum)

// let total = 0;
// for(i=0;i<myNums.length;i++){
//     total +=myNums[i]
// }
// console.log(total)

const shoppingCart =[
    {
        courseName : "java",
        prize:1999
    },
    {
        courseName: "C++",
        prize:2999
    },
    {
        courseName:"python",
        prize:3999
    },
    {
        courseName:"full stack",
        prize:4999
    }
]
const total =shoppingCart.reduce((acc, item)=> acc+item.prize,0)
console.log(total);