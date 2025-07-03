// //getter setter old method, wuthout class wala
// function User(email, password){
//     this._email = email;
//     this._password = password

//     Object.defineProperty(this, 'email', {
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value) {
//             this._email = value
//         }
//     })
//     Object.defineProperty(this, 'password', {
//         get: function(){
//             return this._password.toUpperCase()
//         },
//         set: function(value) {
//             this._password = value
//         }
//     })
// }
// const chai = new User("chai@google.com", "chai")
// console.log(chai.email);
// console.log(chai.password);

//above was function basedsyntax, lets ee object basaed syntax
const User = {
    _email: "h@hc.com",
    _password: "chai",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
const tea = Object.create(User)
console.log(tea.email); //tea.email se getter setter function chalega aur tea._email se hard coded value _email return hogi
//by _email we are defining email in almost a private property. getter setter method hai fir bhi tea.email() nhi likhna hota, tea,email it is , hence get and set is a special property thats working on email variable 
