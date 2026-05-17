//Primitive  data types

// 7 types : String, Number,Boolean,Null,Undefined,Symbol.BigInt

const score = 33;
const score_temp = 101.3;
const isloggedIn = false
const outside_temp = null;
let userEmail ; // undefined

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId); // false

// Reference (Non   primitive)
// Array ,Objects,Functions

const heroes = ["shaktiman","naagraj","doga"]; // array

let myObj = {
    name: "Sunny",
    age : 22,
}// ye object banaya

const myFunct = function(){
    console.log("Hello World");
    
}

//console.log(typeof outside_temp);

//console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ******************************************************************

// STACK(Primitive), HEAP(Non-Primitive )

let myYoutubeName = "SunnyAtediyadotcom" 
let anotherName = myYoutubeName  // ONLY copy pass
anotherName = "ChaiorCode"; // copy me value change ho jati hai YE STACK KA CONCEPT USE KARTA HAI
//console.log(myYoutubeName);
//console.log(anotherName);

//Heap and stack concept=> HEAP SE REFERNCE LETE HAI TO ORIGINAL HI MILTA HAI


let userOne = {
    email : "user@google.com",
    upi : "user@ybl",
}

let userTwo = userOne; // HEAP ME DIRECTLY ORIGINAL VALUE PASS HOTI HAI
userTwo.email = "sunny@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);


