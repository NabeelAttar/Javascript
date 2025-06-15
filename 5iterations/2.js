//arrays and objects are most powerful in js
//hence lets study some high order array loops

//for of
//object here is cheez , not js object
const arr = [1, 2, 3, 4, 5] 
for (const num of arr) {
    console.log(num);
    
}
const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`each char in greetings is ${greet}`);
    
}


//maps
const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "AMERICA")
map.set('FR', "FRANCE")
map.set('IN', "INDIA")

console.log(map);

for (const key of map) {
    console.log(key);
    //o/p : array of each key value pair
}
for (const [key, value] of map) {
    console.log(key, ':-', value);
    console.log(key);
    console.log(value);
}


const myObj = {
    username: "hitesh",
    password: "hc@!23"
}
for (const [key, value] of myObj) {
    console.log(key, ':-', value);
    //gives error: myObj is not iterable 
}