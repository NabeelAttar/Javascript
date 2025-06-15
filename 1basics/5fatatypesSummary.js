// based on how dataypes are stored and accessed there are two types of datatypes: primitive and npon primitive or reference
// 7 types of primitive : these are call by value , that means changes are done in a copy
// 1 String, number, boolean, null, undefined(variable declared, space declared, but value not defined), symbol, bigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id);
console.log(anotherId);
console.log(id==anotherId)

const bigNUmber = 343462343454647657543635768487546545356543654285457425045745740925574874025845777777777454276095670248248
console.log(bigNUmber);


//reference : these are call by reference, directly address in memory can be allocated

//arrays, objects (impotant), functions

const heros = ["Shaktiman", "Nagraj", "Doga"]
let myObj = {
    name : "Nabeel",
    age : 21
}
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myObj);
//  all non primirtive datatypes return object or functionobject (function) for function when typeof used

// JavaScript is dynamically typed.
// This means:
// You don’t need to declare variable types (like int, string, etc.).
// The type is determined at runtime.
// A variable can hold different types of values at different times.


///////////////////////////////////////////////// Stack and Heap ///////////////////////////////////////////////////////////////

// stack memory used for primitive datatypes (copy milegi) and heap memoery used for reference datatypes (reference milega), grows or shrinks dynamically
let myYoutubeName = "hiteshchoudharydotcom"
let anothername = myYoutubeName

anothername = "chaiaurcode"
console.log(anothername);
console.log(myYoutubeName);

let user1 = {
    email: "user@gmail.com"
}
let user2 = user1

user2.email = "nabeel@google.com"
console.log(user1.email);
console.log(user2.email);
