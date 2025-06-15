const coding = ["js", "php", "cpp", "java", "python"]

coding.forEach( function (langauge) {
    console.log(langauge);
} )

//arrow function
coding.forEach( (language) => {
    console.log(language);   
});

function printMe(items) {
    console.log(items);
    
}
coding.forEach(printMe)


coding.forEach((items, index, arr) => {
    console.log(items, index, arr);
    
});

//array of objects
const myCoding = [
    {
        language: "javascript",
        languageFile: "js"
    },
    {
        language: "java",
        languageFile: "java"
    },
    {
        language: "python",
        languageFile: "py"
    }
] 
myCoding.forEach(items => {
    console.log(items);
    console.log(items.language);
    console.log(items.languageFile);
    
});

//hence for each used for boht array and objects 