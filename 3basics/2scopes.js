//global scope
// var c = 300 

// if(true) {
    //block scope
    // let a = 10
    // const b = 20
    // var c = 30   // let and const work perfectly, they cant be accessed outside the scope it is defined, but when written var or not , the vriable is accessed outside and can change values
// }
// console.log(a);
// console.log(b);
// console.log(c);


//global scope used in devtool and global scope used here in node environment is different


//scope video 2
function One() {
    const username = "Nabeel"
    function Two() {
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website); outside scope bariable website
    Two()
    
}
// One()

if(true){
    const username = "Nbaeel"
    if(true) {
        const webstie = " youtube"
        console.log(username + webstie);
        
    }
    // console.log(webstie);
    
}
// console.log(username);



//++++++++++++++++++++++++++++++++++++++++++++interesting +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5));
function addone(num) {
    return num+1
}


//but when defined the same function by holding it in a varibale and calling it before it before its definition , it gives error: Cannot access 'addtwo' before initialization
console.log(addtwo(5));
const addtwo = function(num){
    return num+2
}


//this is a small part of the concept hoisting