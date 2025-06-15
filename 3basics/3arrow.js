const user = {
    username: "hitesh",
    price : 99,
    
    welcomeMessage : function () {
         console.log(`${this.username}, welcome to the website`);
         //current context = current curly braces

         console.log(this);
         
    }

}
// user.welcomeMessage()
// user.username = "Nabeel"
// user.welcomeMessage()

// console.log(this);  //this in global scope in node environment gives empty curly braces 
// in earlier days , js was only running on browser, cuz the engine that executes js was only present in broser, now we took out this engine and named it for eg node , deno , bun
// global object in browser is window object, hence when console.log(this) in browser it doesnt gives empty curly braces but window object 


// function chai(){
//     let username = "hitesh"
//     console.log(this);
//     console.log(this.username);  //output comes as undefined
//     //hence, this.uername is not accessible in function, but in object 
// }

//arrow function syntax
const chai = () => {
    let username = "hitesh"
    console.log(this);
    console.log(this.username);
}
// chai()
//arrow functions do not have their own this, this is inherited form the parent scope 

// const add2numbers = (num1, num2) => {
//     return num1 + num2
// }

//implicit return 
// const add2numbers = (num1, num2) => (num1 + num2)   //curly braces likha h to return likhna oadega and paranthesis me likha hai to reutrn jeyword nahi likhna padega
const add2numbers = (num1, num2) => ({username: "hitesh"})  //outside paranthesis are necessary
console.log(add2numbers(3, 4));
