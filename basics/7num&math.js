const score = 44
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
//now string methods can be used on balance 
console.log(balance.toString().length);
console.log(balance.toFixed(2));  //used in ecommerce websites

const otherNum = 123.899
console.log(otherNum.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


///////////////////////////////////////////////////Maths////////////////////////////////////////////////////////////////////

console.log(Math);
//Math is an object with its own functions
console.log(Math.abs(-3));
console.log(Math.round(9.887));
console.log(Math.ceil(4.3));
console.log(Math.floor(3.9));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));
console.log(Math.floor(Math.random()*10) + 1);   //math.random chooses a number between o and 1 
console.log((Math.random()) + 1);

const min = 10
const max = 25

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
