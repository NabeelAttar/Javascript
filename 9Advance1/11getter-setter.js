//getter and setter are used for cases like we want to display encrypted password, display password in some specific case with some customised output on screen
class User {
    constructor(email, password){
        this.email = email
        this.password = password 
    }
    get email (){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return this._password.toUpperCase()
    } 
    //getter set kiya to setter bhi set krna padega
    set password(value){
        this._password = value
    } //gives error: maximum call stack size exceeded, kuki constructor bhi values set krrha aur customized getters and setters bhi hai, race lg gyi ctor aur getter setter me, this is called race condition 
    //now with _password getters and settter will operate and overwrite the value of password which ctor set
    //used to change values, abcvalue aayi humne bola nhi ABC pe kaam karo, basically encrypt kardiya
}
const Nabeel = new User("Nabeel@gmail.com", "abc")
console.log(Nabeel.password);
console.log(Nabeel.email);

