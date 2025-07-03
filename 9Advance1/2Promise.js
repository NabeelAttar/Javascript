// promise mtlb hum promise krrhe ki asynchronous operation complete hoga, kabhi na kabhi , its an object 
//examples are cryptographic operations, network, file systems
//there are two parts of promises, one is consuming promises and other is creating promises

const promise1  = new Promise(function(resolve, reject){
    //do async task
    //DB calls, netwrok callls, cryptographic operations
    setTimeout(() => {
        console.log("Async task is complete");
        resolve()
    }, 1000);
})

//promise consuption
promise1.then(function(){
    //.then directly relates to resolve part of the async function, for that we need to write resolve() in the async function, and then only async function will be treated as promise and .then will be executed
    console.log("promise consumed");
})

//shorthand of above thing
new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task 2 complete");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async task 2 resolved");
})


//passing data as parameters in resolve
const promise3 = new Promise(function(resolve, rejet){
    setTimeout(() => {
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000);
})
promise3.then(function(user){
    console.log(user);
})

const promise4 = new Promise(function(resolve, reject){
    setTimeout(function (){
        let error = false
        if (!error) {
            resolve({username: "Chai", password: "123"})
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})
promise4.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    //this is called chaining
    //the output returned from above .then is a parameter here
    //used very much in db connections
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log("Promise is either resolved or rejected"))
//finally is used to denote ki kya promise ka kuhc tp hya kya



const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject("ERROR: JS not found")
        }
    }, 1000)
})
//another method to consume promise
async function consumepromise5(){
    try{
        const response = await promise5
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumepromise5()


//one of the applications
// async function getAllusers (){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         //response type of fetch is promise
//         //convert to json 
//         //as convertig also takes time, we used keyword await
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// } 
// getAllusers()

//doing same using .then().catch(), fetch returns promise and is a global method to fetch resource from netwrok
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))

//when fetch promise only rejects netwrok errors , it doesnt reject http erors like 404 
//the code in fetch emthod executes first , as its call back functions are stored in a priority queue in the js engine

//fetch("something") acts in two parts, one part allocates memory for the incoming data, two arrays Onfulfilled[] and Onrejection[]
//arrays are created
//the other part of fetch method sends a netwrok reuest thorugh browser or node API , if the request if resolved the response/function generating response goes in onfulfilled arrya
//if the request is rejected , the response/function generating response goes in the onrejected array, then its 1st part that is data parts responsibility to fire one of the two arrays into the response global variable which we created
//this data is not directly accessible to user