const nums = [1, 2, 3]
// const Total = nums.reduce( function (acc, currval) {
//     console.log(`acc : ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
// acc : accumulator , 0 is initial value of acc

//arrow function
const Total = nums.reduce( (acc, currval)=> (acc + currval), 0)
console.log(Total);


const shoppingCart = [
    {
        course: "js",
        price: 999
    },
    {
        course: "python",
        price: 1999
    },
    {
        course: "android dev",
        price: 2999
    },
    {
        course: "ai ml",
        price: 3999
    },
]
//price tp pay if someone buys all 4 courses
const priceTopay = shoppingCart.reduce( (acc, item) => (acc + item.price), 0)
console.log(priceTopay);
