// function -> reference
// function() -> execution

function sayMyName() {
    console.log("Nabeel");   
}
sayMyName()

function add2numbers (a, b){ //a and b are parameters  
    console.log(a + b)
}
add2numbers(3, 4) //3 and 4 are arguments
add2numbers("3", 4)
add2numbers(3, null)

const result = add2numbers(3, 5)
console.log("Result: ", result); //gives result undefined because function return type is void



function add2numbers2 (a, b){ //a and b are parameters  
    return a+b
}
const result2 = add2numbers2(3, 5)
console.log("Result: ", result2);


function loginusermessage (username = "Sam") {
    if(!username){
        return `please enter a valid username`
    }
    return `${username} just logged in`
}
console.log(loginusermessage("Nabeel"));
console.log(loginusermessage());

//when usernme defined sam in function, if no arguments passed in the calling, then it just executes with the default sa value
//  if given a parameter then that parameter overwrites sam

function CalculateCartPrice (val1, val2, ...num1) { //...is called as rest or spread operator, here it is used when we dont know how to many items prices will be there, so if more than one items are present, we use ... to bundle up those values in single array
    return num1 
}
console.log(CalculateCartPrice(1, 200 , 333, 12, 44));


//how functions handles objects
const user = {
    username: "hitesh",
    price: 199,
}
function handleObject (anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user)

handleObject({
    username: "Nabeel",
    price : 199
})
//instead of creating the object and then passing it in the function, here we directly defined object in the function calling itself

//passing array in a function
const myArray = [1 ,2 ,3 ,45]
function returnSecondvalue(getarray){
    return getarray[1]
}
// console.log(returnSecondvalue(myArray));
console.log(returnSecondvalue([1, 2, 3, 45]));
//defined array in the function calling itself