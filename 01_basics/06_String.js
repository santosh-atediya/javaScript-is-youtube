const name = "sunny"
const repoCount = 50

// console.log(name + repoCount + " Value");  iska use old me hota hai

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)// MODERN USE

const gameName = new String('sunnyatediya')   /// AISE BHI STRING DECLEAR KAR SAKTE HAI constructor me value pass karke

// AISE DECLEAR KARKE HUM BAHUT SARE PROPERTIES KA USE KAR SAKTE HAI


//console.log(gameName[0]);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(4)) ; // isase hum index deke character dekh sakte hai
//console.log(gameName.indexOf('t'));  //isase hum check kar skate hai ki  ye char kitne index pe hai

const newString = gameName.substring(3,10);
 //console.log(newString);
const anotherString = gameName.slice(-6,5);
//console.log(anotherString);

//*************************************************************** */

const name = 'sunny';
//console.log(name);

 const gameName = new String('sunny-htc-atediya');
 //console.log(gameName.length);
 
 const newString = gameName.substring(2,6);
 //console.log(newString);

// console.log(gameName.slice(-6,4))

// space remove in string use trim() only white space remove
const newStringOne = "   Sunny   ";
// console.log(newStringOne);
// console.log(newStringOne.trim()); // remove space

const url = "https://sunny.com/sunny%20atediya"
console.log(url.replace('%20', '-')); // replace value

// value include hai ya nhi

console.log(url.includes("sunny")); // true
console.log(url.includes("pooja")); // false
console.log(gameName.split('-')); // part me alag kar deta hai separater ,space



