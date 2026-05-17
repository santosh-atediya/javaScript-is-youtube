// Dates 

let myDate = new Date();
//console.log(myDate); // isk0 samjhana aasan nhi hota
//console.log(myDate.toString()); //string convert kiya
//console.log(myDate.toDateString()); // date string me convert karta hai
//console.log(myDate.toLocaleString());
//console.log(typeof myDate);

//************************************ */ *******************************************

// let myCreatedDate = new Date(2025,0,26);
 //  let myCreatedDate = new Date(2025,0,2,5,26);
  let myCreatedDate = new Date("2026-01-15");
// console.log(myCreatedDate.toString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // mil sec me convert kiya h
// console.log(Math.floor(Date.now()/1000)); // sec me convert kiya

let newDate = new Date();
console.log(newDate.getMonth() ); // months ko access kar skate hain
console.log(newDate.getDate()); 

//  `${newDate.getDay()} and the time`


console.log(anotherDate);

newDate.toLocaleString('default',{
  weekday : "long",
})
