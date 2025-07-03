function setUsername(username) {
    //complex DB calls
    this.username = username
}
function createUser (username, email, password){
    // setUsername(username) //jb setusername call hoga tb uske this me vo uername store karega, jb call stack se hatt jaayega uska this bhi aur hence uername data bhi hatt jaayega 
    //isliye, hum createuser ka this pass karege and explicitly call karege
    setUsername.call(this, username)
    this.email = email 
    this.password = password
}

const chai = new createUser("Chai", "Chai@google.com", "124")
console.log(chai);
