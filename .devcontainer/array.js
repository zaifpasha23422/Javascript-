// ARRAY = it can store a collection of multiple items in a single variable name 

const arr = [1, 2, 3, 4, 5]
// const hero = ["spiderman", "ironman","hulk", "captain" ]
// console.log(arr);
// console.log(hero);
// console.log(hero[2]);

// arr.push(7)
// arr.pop()
// console.log(arr);
// arr.unshift(9);
// arr.shift();
// arr.shift();
// console.log(arr);

// console.log(arr.includes(2));
// console.log(arr.includes(7));

// console.log(arr.indexOf(2));
// console.log(arr.indexOf(9));


// const newArr = arr.join()  it converts a array into string 
// console.log(arr);
// console.log(newArr);
// console.log(typeof newArr);


// slice , splice 

// splice changes the original array but slice does change the original array .

const array = [1,2,3,4,5,6]
console.log("A", array)

const myn1 = array.slice(1,3)
console.log(myn1);
console.log("B", array);

const myn2 = array.splice(1,3)
console.log("C", array);
console.log(myn2);