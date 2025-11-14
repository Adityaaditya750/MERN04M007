//  1string to uppercase
 let str1="aditya";
console.log(str1.toLocaleUpperCase());


// 7replace method
let str2="Hello World Hello Universe";
console.log(str2.replaceAll(" ","_"));

//extract 5 charecters
console.log(str2.slice(0,5));

// 11 split a setence into an array of words and print the longest array
let str4="i am adityaa ranjan sahoo";
let arr=str4.split(" ");
// console.log(arr);
// console.log( "array length is",arr.length);

// 12 convert a string like hello-world to Hello World
let str5="hello-world";
let str6=str5.replaceAll("-"," ");
console.log(str6)
let str7=str6.charAt(0).toUpperCase()+str6.slice(1);
console.log(str7);
// /concat two string
let firstName="Aditya";
let lastName="Sahoo";
let fullName=firstName.concat(" ",lastName);
console.log(fullName);