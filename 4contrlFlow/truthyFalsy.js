// const useremail = "nabeel@gmail.com"
// const useremail = ""
const useremail = []
if (useremail.length === 0) {
    console.log("array is empty");
    
}
if (useremail) {
    console.log("got the user email");
}
else{
    console.log("dont have user email");
}

// falsy values
//  false , 0 , -0, bigint 0n, "", null, undefined, NaN
// everthing apart from this is considered truthy vlaues

// surprising truthy values 
// "0" , 'false', "false", " ", ' ', [], {}, function(){}
// false == 0 -> true

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}