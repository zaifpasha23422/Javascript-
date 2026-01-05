// const score = 200

// if(score>100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
 

// const balance = 1000
// if (balance > 200) console.log("zaif");


// const balance = 1000

// if(balance<500){
//     console.log("balance is less than 500");
// }else if(balance<750){
//     console.log("balance is less than 750");
// }else {
//     console.log("balance is 1000")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoggle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy course")
}
if (loggedInFromGoggle || loggedInFromEmail){
    console.log("User logged in")
}