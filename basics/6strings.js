const name = "Nabeel"
const repoCount = 10
console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

// string is an object

const gameName = new String('Nabeel-Attar-com')
console.log(gameName[0]);
console.log(gameName.__proto__); // gives you string methods like toUpperCase()
console.log(String.prototype); // gives you string methods like toUpperCase()

console.log(gameName.prototype);  //doesnt exist because .prototype is a property used by functions and gameName is not a function
console.log(String.__proto__); //You're not accessing the prototype of a string value, you're accessing the internal prototype of the String constructor function itself.
console.log(Function.prototype);
console.log(Function.__proto__);

// think of this like this, gameName is an instanceof string (constructor), string is an instanceof Function(constructor)


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.at('-11')); //cn take negatie values 
console.log(gameName.indexOf('b'));

const newString = gameName.substring(4,-22)
console.log(newString);

const anotherString = gameName.slice(-9, -8) //accepts negative value
console.log(anotherString);

const trimString = new String('   Nabeel       ')
console.log(trimString.trim());  //removes extra spaces

const url = "https://nabeelattar.com/Nabeel%20Attar"
console.log(url.replace('%20', '-'));
console.log(url.includes('Nabeel'));

console.log(gameName.split('-'));

