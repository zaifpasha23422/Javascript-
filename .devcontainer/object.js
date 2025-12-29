// to create object we have two ways 1 constructor 2 literals
// when we create object by constructor gives a singleton

const mySym = Symbol("key1")

const JsUSer = {
    "full  name":"zaif",
    [mySym]: "key2",
    age:22,
    location:"Delhi",
    email: "zaifpasha@gmail.com",
    isLoggedIn: false
}
// console.log(JsUSer.email);
// console.log(JsUSer["email"]);
// console.log(JsUSer["full  name"]);
// console.log(JsUSer[mySym]);

// JsUSer.email ="alipash@gmail.com"
// console.log(JsUSer);

// Object.freeze(JsUSer);
// JsUSer.age = 20
// console.log(JsUSer);

// JsUSer.greeting = function(){
//     console.log("hello JS user");
//  }
// console.log(JsUSer.greeting);
// console.log(JsUSer.greeting());

JsUSer.greetingTwo = function(){
    console.log(`hello JS user, ${this["full  name"]}`)
}
console.log(JsUSer.greetingTwo());