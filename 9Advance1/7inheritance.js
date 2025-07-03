class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`Username is ${this.username}`);
    }
}
class teacher extends User {
    constructor(username, email, passsword){
        //.call me this pass karneki jagah we use super keyword
        super(username)
        this.email = email
        this.password = passsword
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const chai = new teacher("chai", "chai@code.com", "123")
chai.addCourse()

const masalaChai = new User("masala")
// masalaChai.addCourse() //parent cnat access childs properties and methods, child can access parents properties and methods
masalaChai.logMe()
chai.logMe()
console.log(chai === teacher);
console.log(chai instanceof teacher);
console.log(chai instanceof User);
console.log(teacher instanceof User);
