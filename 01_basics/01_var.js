// investigation
const accountId = 144552
let accountEmail = "sunny@google.com"
var accountPassword = "12345"
acountCity = "Jaipur"
let accountState;
//accountId = 2 // Not Allowed

 console.log(accountId);
// variable ko change karke dekhte hain

/*
prefer not to use var
because of issue block scope and functional scope

*/

accountEmail = "atediya@google.com" // changeble
accountPassword = "222333" // changeble
acountCity = "Bengaluru"  // changeble
// all variable are printed 
console.table([accountId,accountEmail,accountPassword,acountCity,accountState])