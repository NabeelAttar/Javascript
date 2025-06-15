// const tinderUser = {} -> not a singleton object, object declared by literals
const tinderUser = new Object() // singleton object, object declared using constructor
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoogedIn = false
console.log(tinderUser);

const regularUser = {
    email: "some@example.com",
    fullName : {
        userFullName: {
            firstName: "Nabeel",
            lastName: "Attar"
        }
    }
}
console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2) //{} is the target and obj1 and obj2 gets copied into it, if no {} then obj1 is the target and obj2 gets copied into it
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 11,
        email: "google.com"
    },
    {
        id: 11,
        email: "google.com"
    },
    {
        id: 11,
        email: "google.com"
    },
]
console.log(users[1].email)

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //datatype of this output is array, so very important for applying loops n all
console.log(Object.values(tinderUser)); 
console.log(Object.entries(tinderUser)); 

console.log(tinderUser.hasOwnProperty('isLoogedIn'));
console.log(tinderUser.constructor);


const course = {
    courseName : "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}
// console.log(course.courseInstructor);
const {courseName, courseInstructor: instructor, price} = course //curly braces ka syntax -> destructuring ho rhi, will be used in react 
// console.log(courseInstructor)
console.log(instructor)
console.log(courseName)
console.log(price)

//api -> API stands for Application Programming Interface.
// It is like a messenger that lets two software systems talk to each other, API is a messenger which sends messages/notification between client to server or viceversa using in jSON format {}, [{}]