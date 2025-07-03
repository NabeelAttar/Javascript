// let myName = "Nabeel        "
// console.log(myName.length); //task : shoudld give actual length , legnth without white spaces 

let myheroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getspidermanPower : function (){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

//Object.create called as factoy functions
Object.prototype.hitesh = function(){
    console.log("hitesh is present in all objects");
} 
// isse humne hierarchy ke top level element ka access le liya which is object, ab javascript me sbkuch object h to every has this hitesh method

//heroPower is an object , it has hitesh power
heroPower.hitesh()
//myheroes is an array , it has hitesh power
myheroes.hitesh()

//similarly, does object have access to array's methods? 
Array.prototype.heyhitesh = function(){
    console.log("heyhitesh is only present in array");
}
myheroes.heyhitesh()
// heroPower.heyhitesh() -> gives error


//inheritance
const user = {
    name: "chai",
    email: "chai@google.com"
}
const teacher = {
    makeVideo : true
}
const teachingSupport = {
    isAvailable : false 
}
const TAsupport = {
    makeAssignment : "js assignmnet", 
    fulltime: true,
    __proto__: teachingSupport //inherits properties and ethods of teachingSupport
}
//inheritance can also be declared outside the object 
teacher.__proto__ = user

//modern syntax
Object.setPrototypeOf(teachingSupport, teacher) //teachingSUpport now has properties of teacher 



//now , lets solve the problem 
let myName = "Nabeel        "

String.prototype.trueLength = function (){
    console.log(`${this}`)
    console.log(`current length is : ${this.length}`);
    console.log(`True length is : ${this.trim().length}`);
}
myName.trueLength()
//as prototype truelength is accessible to strings only
"hitesh".trueLength()
"chaiaurcode".trueLength()

//this : if there is a function inside a fuction , in such cases this refers directly to global execution context, beither of these two functions context , and global execution context is empty for node and for browser its window object