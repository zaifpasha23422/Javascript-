class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase() 
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password.toUpperCase()}ali`
    }
    set password(value){
        this._password = value
    }
}
const zaif  = new User("zaifpasha23422@gmail.com", "zaif")
console.log(zaif.password); 
console.log(zaif.email)