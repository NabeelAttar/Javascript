//immediately invoked function expression
// sometimes global variables pollute a function, a function where we dont need global scope variables so we want to immediately define a funtion (iife), so that global variables doent affect it 
// used in db connection where we want to immeidately connect db before any execution

(function chai () {
    //named iife
    console.log("DB connected");
})(); //semi colon is important in iife
//denoted : ()()



( (name) => {
    // unnamed iife
    console.log((`DB CONNECTED ${name}`));
}) ("hitesh");  // -> similar to chai("hitesh") in nomral execution