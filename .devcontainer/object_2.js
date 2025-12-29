// const tinderUSer = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Zaif"
tinderUser.isLoggedIn = false
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// const regularUser = {
//     email: "some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"zaif",
//             lastname:"pasha"
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.lastname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = {obj1 , obj2}
// console.log(obj3);

// const obj4 = Object.assign(obj1, obj2)
// console.log(obj4);

// const obj5= {...obj1, ...obj2}
// console.log(obj5);
