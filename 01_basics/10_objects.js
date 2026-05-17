// OBJECT TWO TYPES SE BANTE HAI LITERALs AND CONSTUCTOR(Singleton banta) SE

//************* Object-> Literals / *******************

const mysym = Symbol("key1");  // symbol liya

const jsUser = {
  name:"Sunny",
  "full name" : "Sunny Atediya ",
  age: 20,
  [mysym] :"mykey1", // symbol ko declear karne k liye sq brac use karte h
  location: "Jaipur",
  email : "sunny@google.com",
  isLoggedIn : false,
  lastLoginDays : ["Monday","Saturday"]
}

/* console.log(jsUser.email);
console.log(jsUser ["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mysym]); */

jsUser.email = "sunny@chatgpt.com";
// Object.freeze(jsUser) ;// object ko lock kar sakte hai
jsUser.email = "sunny@atediya.com"; // ab email me change nhi hoga

//console.log(jsUser);

jsUser.greeting = function(){
  console.log("Hello JS User");
}

jsUser.greetingTwo = function(){
  console.log(`Hello JS User,${this.name}`);
}
//console.log(jsUser.greeting());
//console.log(jsUser.greetingTwo());

//****************OBJECT PART 2 ************** */******** */

// const tinderUser = new Object(); // singleton object
const tinderUser = {} // not singleton 

tinderUser.name = "Sammy"
tinderUser.id = "123"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regularUser = {
  email:"some@gmail.com",
  fullname:{
    userfullname : {
      firstname : "Sunny",
      lastname : "Atediya"
    }
  }
}

// console.log(regularUser.fullname.userfullname.firstname);
 const obj1 = {1:"a",2:"b"};
 const obj2 = {3:"c",4:"d"};
 const obj4 = {5:"e",6:"f"}

 //const obj3 = Object.assign({},obj1,obj2,obj4) // isase ek ho jata hai object
 //console.log(obj3);
 
 const obj3 = {...obj1,...obj2};
 // console.log(obj3);
 
 const user = [
  {
    id : 1,
    email: "s@gmail.com"
  },
   {
    id : 2,
    email: "s@gmail.com"
  },
   {
    id : 3,
    email: "s@gmail.com"
  },
  
 ]
 user[1].email
/*  console.log(tinderUser);
 console.log(Object.keys(tinderUser)); // IMPORTANT  PROPERTIES HAI
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser)); */
 
 // console.log(tinderUser.hasOwnProperty('isLoggedIn')); // property avaiable hai ya nhi
 
 // ***********OBJECT-DAY03 ***************************************

 const course = {
  coursename :"js in hindi",
  price : "999",
  courseInstructor:"Sunny"
 }

 //course.courseInstructor
const {courseInstructor : instructor} = course; //  deinstructor
console.log(instructor);

