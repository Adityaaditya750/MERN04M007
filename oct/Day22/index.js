console.log("functions of string")
let str="Hello";
console.log(str.at(0))
console.log(str.charAt(0))
// concat method
let str2=" World";
console.log(str.concat(str2));
let str1="Qlith  ";
console.log(str1.length);
console.log(str1.trim().length);
console.log(str1.trimStart());
console.log(str1.trimEnd());
console.log(str1.replace("Qlith","Aditya"));
let str3="Hello World Hello Universe";
console.log(str3.replaceAll("Hello","Hi"));

let num=20;
console.log(num.toString());
console.log(typeof num.toString());
// slice method
let str4="Hello World";
console.log(str4.slice(1,4));
console.log(str4.slice(1));  // stratin index < end index
console.log(str4.slice(-5)); // negative indexing
console.log(str4.slice(-11,-6));


let str5=str4.split(" ")
console.log(str5)