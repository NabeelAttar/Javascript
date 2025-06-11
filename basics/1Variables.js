const accountId = 14432
let accountGmail = "nabeel@google.com"
var accountPassword = "12345"
accountCity = "Thane"
// a variable can be decalred without let const or var, but should be avoided
let accountState 

// accountId = 2 not allowed
console.log(accountId);

accountGmail = "hitesh@accountGmail"
accountPassword = "21212121"
accountCity = "Pune"

console.table([accountId, accountGmail, accountPassword, accountCity, accountState ])

// prefer not to use var becasue of issue in blockscope and functional scope