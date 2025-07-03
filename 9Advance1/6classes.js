//ES6

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     } //automatically called after new keyword is used

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername (){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new User ("Nabeel", "nabeel@gmail.com", "123")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//behind the scenes
function User (username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
   return `${this.username.toUpperCase()}`
}
const tea = new User ("hitesh", "hitesh@gmail.com", "13")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
