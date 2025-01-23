const accountId = 12556;
let accountEmail = "sujal@js.com"
var accountPassword = "123456"
accountCity = "Chandigarh"
let accountState

// accountId = 2;   // accountId is constant now it is not allowed to reinitialised/changed

accountEmail = "sj@js.com"
accountPassword = "30052005"
accountCity = "Rajpura"


// console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// Prefer not to use var because of issue in block scope and function scope
