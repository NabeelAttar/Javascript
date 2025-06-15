//arrays in js are resizable and can contain multiple types of elements 
//js array operations create shallow copies

const myArr = [1, 2, 3, 4, 5]
// console.log(myArr[0]);
// const heros = ["Shaktimaan", 2, true, "spiderman"]

// const myArr2 = new Array(1, 3, 5, 7)

// //methods 
// myArr.push(6)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);
// myArr.unshift(9)
// console.log(myArr);
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

//slice, splice 
console.log("A", myArr);

const myn1 = myArr.slice(1,3) //copy elements starting from index 1 to index 3, not including 3 
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3) //deletes elements starting from index 1 upto length 3 from the main array
console.log(myn2);
console.log("C", myArr);

//hence, splice manipulates original array and slice doesnt
