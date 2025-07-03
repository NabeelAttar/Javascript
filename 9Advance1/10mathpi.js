console.log(Math.PI);
Math.PI = 5
console.log(Math.PI); //doesnt overwrite will return 3.14 again

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);
//output: 
// value: 3.141592653589793,
//   writable: false, //so, PI is unwritable, vvery hardcoded in the cpp implementation
//   enumerable: false,
//   configurable: false

//set own desriptor properties
const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    OrderChai: function(){
        console.log("Chai nhi bani");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name")); //this says give me descroption of property name in object chai 

// Object.defineProperty(chai, "name", {
//     writable: false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(chai, "name")); 


for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}