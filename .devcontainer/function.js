// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 4)

// function addtwonumneber(num1, num2){
//     let result = num1 + num2
//     return result
// }
// const result = addtwonumneber(3, 5)
// console.log("output :",result);

// function subtract(number1 , number2){
//     return number1 - number2
// }
// const result = subtract(10, 4)
// console.log("output:", result)

// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Zaif"));

// function Name(username){
//     if(username===undefined){
//         console.log("please enter a name");
//         return
//     }
//     return `${username} just logged in`  same
// }
// console.log(Name());

// function Name(username){
//     if(!username){
//         console.log("please enter a name");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(Name());

// function Name(username = "Amash"){
//     if(!username){
//         console.log("please enter a name");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(Name("Ali"));

function calculateCartPrize(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrize(200, 400 , 100 , 240, 700));

// to convert object into function
// const user = {
//     username: "zaif",
//     prize:199
// }

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and  the prize  is ${anyobject.prize} `);
}
// handleObject(user);

handleObject({
    username: "ali",
    prize:399
})
// to cnvert array into function 
const myNewArray = [100, 200 ,300,400 ,600]

function myArray(getarray){
    return getarray[1]
}
// console.log(myArray(myNewArray));
console.log(myArray([100, 200 ,300,400 ,600]));
