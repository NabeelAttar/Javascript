// objects are declared in two ways : 1) literal (here, singleton nahi banta) , 2) constructor (hamesha singleton banega)
// object.create -> object created using constructor , here singleton object banega


const Sym = Symbol("key1")

//object literals
const JsUser = {
    name: "Nabeel",
    "full name" : "Nabeel Attar",
    [Sym] : "key1",
    age: 21,
    location: "Thane",
    email: "nabeel@gmail.com",
    isloggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[Sym]);
console.log(typeof JsUser[Sym]);

JsUser.email = "Nabeel@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Nabeel@microsoft.com"
console.log(JsUser);

// in js, functions are treated as variables 
JsUser.greeting = function(){
    console.log("Hello JS user");   
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);   //"this" is used to call the object in the same object 
}
console.log(JsUser.greeting());
console.log(JsUser.greeting); //function isnt executed just returns back the function reference 
console.log(JsUser.greetingTwo());