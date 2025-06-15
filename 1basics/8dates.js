const myDate = new Date()

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate);
// date is an object

// let myCreatedDate = new Date(2023, 0, 23, 5, 3 ,12)
// console.log(myCreatedDate.toString());

// let myCreatedDate = new Date("2023-01-22")
// let myCreatedDate = new Date("22-01-2023")
let myCreatedDate = new Date("01-22-2023")

console.log(myCreatedDate.toString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);  //gives time between current time and midnight 1 jan 1970 in millseconds
console.log(myCreatedDate.getTime());

console.log(Math.round(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDate());
console.log(`today is ${newDate.getDay()}`);

console.log(newDate.toLocaleString('default', {
    weekday: "long",  
    era: "short"
}))