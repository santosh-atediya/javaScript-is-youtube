

function sayMyName(){
console.log("S");
console.log("U");
console.log("N");
console.log("N");
console.log("Y");
}

// sayMyName()
 //function addTwoNumbers(num1 ,num2){ // function define karte tb jo input lete Parameter bolte h
  //console.log(num1 + num2);

 //}
 // const result = addTwoNumbers(3,8);
 //console.log(result);
 

  function addTwoNumbers(num1 ,num2){ 
  let result = num1 + num2;
  return result;
 }
 const result = addTwoNumbers(3,8);
 // console.log("result : ", result);

  function UserLoginMessage(username){
   // if(username===undefined) // same likh sakte hai
     if(!username){  // same both mean username === undefined
      console.log("Please Enter your username");
      return
    }
    
 return `${username} just logged In`
  }
// console.log(UserLoginMessage("Sunny"));
//console.log(UserLoginMessage("")); // ye to null string man lega
 // console.log(UserLoginMessage()); // ye undefined dega username ki jagah
    

 //************************ Function day02*********************************************** */
 
 function calculatesCartPrice(...num1){ // aisa karne se multiple values arrayme store ho jati hai
  return num1;
 }
//console.log(calculatesCartPrice(20,30));

const user = {
  username:"Sunny",
  Price:199
}

function handleObject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.Price}`);
  
}
// handleObject(user);
/* handleObject({ // direct obeject bana k value bhi pass kar sakte hain
  username:"sam",
  Price:399
})*/

const myarray = [100,200,300,400,500];

function secondValue(getarray){
return getarray[1];
}

console.log(secondValue(myarray));

