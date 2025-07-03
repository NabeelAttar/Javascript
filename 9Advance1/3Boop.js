//object literal means creating the object literally
const user = {
    username : "hitesh",
    loginCOunt : 8,
    signedIn : true,
    
    getUserdetails: function(){
        console.log("got user details from database");
        console.log(this.username);
        console.log(this); //gives current context
        
    }
}
//now , similarly user2, user3 can be created, but that will be too much workload to change values of usernames, etc so we intoduced constructor
console.log(user.username);
console.log(user.getUserdetails());
console.log(this);


// //new keyword relates to contructor function , 1 hi object se multiple instances banane ho tb 
// const date = new Date()
// const promise1 = new Promise()

function User(username, loginCOunt, isLoggdIn){
    //constructor function
    this.username = username
    this.loginCOunt = loginCOunt
    this.isLoggdIn = isLoggdIn

    this.greeting = function (){
        console.log(`welcome ${this.username}`);
        
    }

    // return this, implicitky defined, likho na likho this to apne aap return hoga hi  
}

const User1 = new User("Nabeel", 12, true)
const User2 = new User("Hitesh", 1, false)
console.log(User1); //User2 overrides User1 values, thats why we write new keyword to suggest new isntance, em pty object si gettig created, then we put values using this.username = username etc
console.log(User2);
console.log(User1.constructor); //reference to self 
console.log(User1 instanceof User);
console.log(User2 instanceof User);
console.log(User1 instanceof Object);


// when new keyword is called
// 1. empty object is created
//2. constructor function packs arguments 
//3. arguments are injected into the this keyword , values are now current contet based
//4. can be used in functions


//PROTOTYPES
//default behaviour of js is prototypal ie agar kuch nhi milta js ko aur upar upar levels pe , parents , grand parents me jaata koi variable ki value nikaalne, until ya to value mil na jaaye ya null mil jaaye, this is called prototypcal inheritance
//prototype hi vo h jo hume new keyword, this , classes ka access de rha     

//in browser, firstly prototypes of array/string is shown then in it we prototype of object then in it we get null or get_proto and set_proto
//everything in js is an object, so array or string are hildren of object , so they have all properties of ibject, usable or not

//similarly function is an object too 
function multiplyby5 (num){
    return num*5
}
multiplyby5.power = 2 //using function as object 
console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);




function createUser (username, score){
    this.username = username
    this.score = score
}
//creating our own functionalities which will be used by a particular object
createUser.prototype.increment = function(){
    this.score++
    //this mtlb jis -> jisne bhi function bulaya uska score badha do
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
      
}
const chai = new createUser("chai", 25) //new keywor is important, vo nhi hua to pta nhi chlega ki createUser me nayi properties add hyi hai
const tea = new createUser("tea", 240)

chai.increment() //.prototype nhi likha to bhi chalega  
chai.printMe()

tea.increment()
tea.printMe()

//js classes je thorugh nhi new keyword ke throyugh constructor function deti hai
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/