let score = undefined
// use 33, 33abc, null, undefiend , true/false and "Nabeel" values in score


console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log( valueInNumber); //NaN-> not a number



let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

// 1->true , 0->false
// ""->false
// "Nabeel" ->true


let num = 33
let stringNUm = String(num)
console.log(stringNUm);
console.log(typeof stringNUm);

/////////////////////////////////////////////////////// OPERATIONS ////////////////////////////////////////////////////////////////////////////////////

let value = 3
let negvalue = -value
console.log(negvalue);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);

let str1 = "hello"
let str2 = " nabeel"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 +2);
console.log(1 +2 + "2");
console.log(3+1 +"2" + 2+1);

//in js if string is first every element is treated as a string if string is in last elements are calculated upto the second last element and then merged with
// last eleement which is a string 

console.log(true);
console.log(+true);

let x =4
let y= ++x
console.log(x)
console.log(y)
y = x++
console.log(x)
console.log(y)




