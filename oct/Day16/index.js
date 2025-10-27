console.log("welcome to variable");
//var,let ,const the way of declaration
// only declaration
// var
var a//undefined
console.log(a);
// only declaration of variable using var keyword is possible
// only initialization
 a=10;
console.log(a);
// only initialization of variable using var keyword is possible
// declaration and initialization are possible
// redeclaration and reinitialization are possible




// let
// only declaration
let fullname;//undefined
console.log(fullname);
// only declaration of variable using let keyword is possible
// only initialization
fullname="aditya";
console.log(fullname);
// only initialization of variable using let keyword is possible
// declaration and initialization are possible
// redeclaration is not possible
// reinitialization is possible




// const
// only declaration not possible
// const age;//error missing initializer in const declaration
// only declaration of variable using const keyword is not possible
// only initialization not possible
// age=22; //error missing initializer in const declaration



// hoisting
console.log(city); //undefined
var city="pune";
console.log(city); //pune





// Data types in js
// primitive data types single value
// 1.number
let marks=95;
console.log(marks);
console.log(typeof marks);
// 2.string
let studentname="aditya";
console.log(studentname);
console.log(typeof studentname);
// 3.boolean
let ispassed=true;
console.log(ispassed);
console.log(typeof ispassed);
// 4.undefined
let school;
console.log(school);
console.log(typeof school);
// 5.null
let result=null;
console.log(result);
console.log(typeof result);
// 6.symbol
let sym=Symbol("id");
console.log(sym);
console.log(typeof sym);
console.log(typeof typeof sym);
// 7.bigint
let bignum=BigInt(123456789012345678901234567890);
console.log(bignum);
console.log(typeof bignum);


// non-primitive data types many values
// 1.object
let person={
    name:"aditya",
    age:22, 
};
console.log(person);
console.log(person.name);
console.log(person["age"]);
console.log(typeof person);

// 2.array
let fruits=["apple","banana","grapes"];
console.log(fruits);
console.log(typeof fruits);


