const myObj = {
    js : 'javascript',
    cpp: "c++",
    rb: "ruby",
    swift : "swift"
}

for (const key in myObj) {
    console.log(`${key} is for ${myObj[key]}`);
    
}    


const programming = ["js", "rb", "cpp", "java"]
for (const key in programming) {
    console.log(key);
    //returns 0,1,2,3 which are keys of above array
    console.log(programming[key]);
    
}


//maps
const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "AMERICA")
map.set('FR', "FRANCE")
map.set('IN', "INDIA")

for (const key in map) {
    console.log(key);
    //no o/p : cant forin perform iteration on a map
}