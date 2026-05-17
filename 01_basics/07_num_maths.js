

const num = 100; // ye fix nhi hai ki number hi hai
//console.log(num);

const balance = new Number(100); // ispe properties apply kar sakte hai
//console.log(balance);

//console.log(balance.toString().length);// ye string me convert ho gya to iski length dekh skate hain


const otherNumber =  123.8890;
// console.log(otherNumber.toPrecision(4)); // kitna digit lena hai

const hundered = 1000000;
// console.log(hundered.toLocaleString('en-IN')); // isko comma k sath seperates kar sakte hai
// isme hum MIN/MAX value use kar sakte hain


//++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// maths library js k ander aati hai

// console.log(Math);
// console.log(Math.abs(-4));// absolute value
// console.log(Math.round(4.6)); // math ki properties hai isme hum round value de skate hain
//console.log(Math.ceil(4.2)); // top value include always
// console.log(Math.floor(4.9)); // low value included always

console.log(Math.random()); // zero or one k bich value deta hai
console.log(Math.random()*10 + 1);

// jab kabhi humein between me value consider karna ho to

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min + 1)) + min);


