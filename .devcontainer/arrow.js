// const user = {
//     username: "zaif",
//     prize:999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`);
//         console.log(this)
//     }
// }
// user.welcomeMessage()
// user.username = "Ali"
// user.welcomeMessage()

// function chai(){
//     let username= "zaif"
//     console.log(this.username);
// }
// chai()


// const chai = function(){
//     let username = "zaif"
//     console.log(this.username);
// }
// chai()

// const chai = () =>{
//     let username = "zaif"
//     console.log(this);
// }
// chai()

// explicit return
// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(4, 7));


// implicit return
// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(4, 7));

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(4, 7));

const addTwo = (num1, num2) => ({username:"zaif"})
console.log(addTwo(4, 7));
