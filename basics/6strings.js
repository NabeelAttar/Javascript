const name = "Nabeel"
const repoCount = 10
console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

// string is an object

const gameName = new String('NabeelAttar')
console.log(gameName[0]);
console.log(gameName.__proto__); // gives you string methods like toUpperCase()
console.log(String.prototype); // gives you string methods like toUpperCase()

console.log(gameName.prototype);  //doesnt exist because .prototype is a property used by functions and gameName is not a function
console.log(String.__proto__); //You're not accessing the prototype of a string value, you're accessing the internal prototype of the String constructor function itself.
console.log(Function.prototype);
console.log(Function.__proto__);

// think of this like this, gameName is an instanceof string (constructor), string is an instanceof Function(constructor)


