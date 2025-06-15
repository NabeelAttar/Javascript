//if 
if(2!=="2"){
    console.log("executed");
    
}
//  if - elif - else 
// switch case 
const month = 2
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;

    default:
        console.log("default statement printed");
        break;
}
// if for a case value matches and it doesnt have break then it executes all code until a break is found OR default is reached. so default is not executed



// nullish coalescing operator (??) : null undefined
// when values from db or firebase come they dont come directly, often two values come, if one of these values are null or underfined whole code structure may get disturbed
let val1;
// val1 = 5 ?? 10 // whicherver isthe first value, selects it 
// val1 = null ?? 10 
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1);


//ternary operator
// condition ? true : false 
const price = 100
price>=80 ? console.log("greater than 80") : console.log("less than 80");

