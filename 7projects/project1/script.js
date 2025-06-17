const buttons = document.querySelectorAll('.box')
const body = document.querySelector('body')

buttons.forEach(function (button){
    button.addEventListener('click', function (e){
        console.log(e);
        console.log(e.target)
        e.stopPropagation(); //avoids overriding from body click events , as box is a part of body
        switch (e.target.id) {
            case 'red': 
                body.style.backgroundColor = e.target.id
                break;
            case 'green': 
                body.style.backgroundColor = e.target.id
                break;
            case 'yellow': 
                body.style.backgroundColor = e.target.id
                break;
            case 'blue': 
                body.style.backgroundColor = e.target.id
                break;
           
            default:
                body.style.backgroundColor = "grey"
                break;
        }
    })
})

body.addEventListener('click', function () {
    body.style.backgroundColor = "grey";
})