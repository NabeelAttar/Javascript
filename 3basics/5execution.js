//javascript execution context 
//when code file is given sabse pele to global execution ocntext banega, compulsory 
//js is single threaded, everything works as a process 
 
//functional execution context is another thing and in some environments like mongoose eval execution context also comes 
// hs code runs in 2 phases : memory creaton phase and execution phase  

let val1 = 10 
let val2 = 5
function addNum (num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

//1. whole code is run in global environment , and allotted to this 
// 2. memory is allotted to val1 and val2, and its type is undefined firstly
// 3. them function addnum definition is stored in the memory
// 4. then result1 and result2 is assigned location in memory, undefined tyoe
// 5. then comes the execution phase, again from line 1, val1 and val2 is given its value and then addnum makes diferent executional content which every function in js makes
// every executional environment has its own new variable environment and execution thread  , again memoery phase and execution phase will occur for addNUm function, jitni bhi baar likhoge 
// this memoery phase will assign num1, num2 and total , undefined 
// and execution phase woll assign values and calculate total and return this value to parent executional context
// when we come to next line, this functional executional context gets deleted toooooo
