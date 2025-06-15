const marvelHeros = ["ironman", "spiderman", "thor"]
const dcHeros = ["superman", "batman", "flash"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

const allHeros = marvelHeros.concat(dcHeros) //combines two or more arrays and returns a NEW array
console.log(allHeros);

const allnewHeros = [...dcHeros, ...marvelHeros] //s[read operator]
console.log((allnewHeros));

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
console.log(another_array.flat(Infinity));

console.log(Array.isArray("Nabeel"));
console.log(Array.from("Nabeel"));

console.log(Array.from({name: "Nabeel"}));  //retruns empty array whenever couldnt convert into array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
