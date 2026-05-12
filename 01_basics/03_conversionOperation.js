let score = "33"
let score_str = "33abc"
let score_null = null

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
let valueInNum_str = Number(score_str)
let valueInNumber_null = Number(score_null)

console.log(typeof valueInNumber);

console.log(valueInNumber); // value convert to ho jayegi but wo Nan de dega string type if a to z ho isliye check karein
console.log(valueInNum_str);
console.log(valueInNumber_null);

// "33" => 33
// "33abc" => NaN (not and number)
// true => 1; false >0

let isloggedIn = true

let booleanIsloggedIn = Boolean(isloggedIn)
console.log(booleanIsloggedIn)

// boolean me 1 => true, 0=> false
// "sunny" => true,  "" => false

let someNum = 33

let stringNum = String(someNum);
console.log(stringNum)
console.log(typeof stringNum)
