class User {
    constructor(username) {
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId (){
        //kayi baar, aap iss method ka access har uss object ko nhi dena chahte jo iss class se instantiate hua h, isliye static keyword lagaya
        return 123 //assume it is returning unique ID everytime 
    }
}
const hitesh = new User ("hitesh")
// console.log(hitesh.createId());

class teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email 
    }
}
const iphone = new teacher("iphone", "i@phone.com")
console.log(iphone.createId())