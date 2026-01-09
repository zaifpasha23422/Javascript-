// const arr =["zaif", "ali" , "amash", "amir"]
// for(const i of arr){
//     console.log(i);
// }

// const array = [1,2,3,4,5]
// for(let num of array){
//     console.log(num);
// }


// const greeting  = "Hello World"
// for(const num of greeting){
//     if(num=="o"){
//         console.log("o is detected");
//         break
//     }
//     console.log(num)
// }

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map);
// for(const [key, value] of map){
    // console.log(key, '=>', value );
// }

const myObject = {
    'game1':"gta",
    'game2': "Spiderman"
}
for(const[key, value] of myObject){
     console.log(key, '=>', value );
}