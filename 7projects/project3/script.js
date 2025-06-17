// const box = document.getElementsByClassName('box') //gives error cuz it returns an html collection
const box = document.getElementsByClassName('box')[0]
// const box = document.querySelector('.box')
//setinterval is a function which keeps repeating function in a specific interval, here 1000ms
setInterval(function () {
    let date = new Date()
        box.innerHTML = date.toLocaleTimeString()
        }, 1000)