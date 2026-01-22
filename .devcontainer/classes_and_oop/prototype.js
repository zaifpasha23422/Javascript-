let myName = "zaif"

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.zaif = function(){
    console.log(`zaif is a champion`)
}
heroPower.zaif()
myName.zaif()

Array.prototype.heyZaif =function(){
    console.log(`zaif says hello`);
}
myHeros.zaif()
myHeros.heyZaif()
// heroPower.heyZaif()

const User = {
    username: "zaif",
    email:"zaifpasha23422@gmail.com"
}

const Teacher = {
    makeVideo:true
}
const TeachingSupport = {
    isAvailable: false 
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __prototype__ : TeachingSupport
}

// console.log(TASupport)

// Teacher.__prototype__ = User
// console.log(Teacher);


Object.setPrototypeOf(Teacher, User)
console.log(Teacher.username)

// Object.setPrototypeOf(User,Teacher)
// console.log(User.makeVideo)

Object.setPrototypeOf(User,TASupport)
console.log(User.fullTime)


let anotherUsername = "ChaiAurCode"
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is : ${this.trim().length}`)
}

anotherUsername.trueLength()
"amash".trueLength()