// ARRAY

const myArr = [1,2,3,4,5,'sunny' ];// js me array differnt data type ko ek set me le sakte hai
const heroes = ['shaktiman','naag'];
// console.log(myArr);

 const myArr2 = new Array(0,1,2,3,4,5);
 // method appply kar sakte hai
  //console.log(myArr2); // original array me no change

// myArr2.push(5);
// myArr2.push(6);
 //console.log(myArr2);

// myArr2.pop(); // remove last ele
// console.log(myArr2); // original array change nhi hota hai
// myArr2.unshift(0); // ye method ele ko shift kar deta hai
// myArr2.unshift(9);
 //console.log(myArr2); 

 //myArr2.shift(); // ye first ele ko remove kar deta hai
 //console.log(myArr2);
 
 //console.log(myArr2.includes(4)); // include ya nhi array k ander
 //console.log(myArr2.indexOf(3)); // index pata kar skate hai

 const newArr = myArr2.join(); // string formate me conert kar deta hai
 //console.log(myArr2);
// console.log(newArr);
// console.log(typeof newArr);

//********************* Slice & Splice****************** */**************** */
// slice only range se value deta hai but original arr me change nhi karta
// splice  -> original array ko manupulate(change) karta hai or slice ko array se alag kar deta hai

/* console.log("A ", myArr2);

const myn1 = myArr2.slice(1,3);
console.log(myn1);

console.log("B ", myArr2);
const myn2 = myArr2.splice(1,3);

console.log("C ",myArr2);

console.log(myn2);   */


//************** ARRAY PART 2 */************** */

const marvel_heros = ["thor","Ironmen","spiderman"];
const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros); // ye only last wale ko  ek ele consider karta hai
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

//const all_heros = marvel_heros.concat(dc_heros); // concat two array ko merge karta hai concatly
//console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]; // aise karke me direct concat kar sakte hai
// console.log(all_new_heros);
 

const real_another_arr = [1,2,3,4,[5,6,7],8,[2,3,[4,6],1],0]; // isme array k ander array hai to isko ek array bana hai to FLAT method use kare
// console.log(real_another_arr.flat(Infinity));

console.log(Array.isArray("Sunny")); // present hai ya nhi
console.log((Array.from("Sunny"))); // isase new array ban jayega 

// INTERESTING//
console.log(Array.from({name:"sunny"})); // EMPTY ARRAY RETURN KAREGA OBJECT K CASE ME AGAR KEY NHI DENGE TO

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); // new array bana k de dega


 // isArray,From, Of ko padna hai// 
 