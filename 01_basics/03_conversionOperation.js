let score = "33"
let score_str = "33abc"
let score_null = null

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)
let valueInNum_str = Number(score_str)
let valueInNumber_null = Number(score_null)

// console.log(typeof valueInNumber);

//console.log(valueInNumber); 
//console.log(valueInNum_str);// value convert to ho jayegi but wo Nan de dega string type if a to z ho isliye check karein
//console.log(valueInNumber_null);

// "33" => 33
// "33abc" => NaN (not and number)
// true => 1; false >0

let isloggedIn = true

let booleanIsloggedIn = Boolean(isloggedIn)
// console.log(booleanIsloggedIn)

// boolean me 1 => true, 0=> false
// "sunny" => true,  "" => false

let someNum = 33

let stringNum = String(someNum);
// console.log(stringNum)
// console.log(typeof stringNum)


let val = 3
let negVal = -val
// console.log(negVal);

let str1 = "hello"
let str2 = " Sunny"
let str = str1 + str2
//console.log(str)

// ****************CONVERSION CONFUSION**************

console.log("1"+ 2);
console.log(1 + "2");
console.log("1"+ 2 + 3);
console.log(1 + 2 + "3");

console.log(+true)

