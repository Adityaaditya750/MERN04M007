console.log("today we are go to learn variable");
let a = 10;
console.log(a);
 let A = 20;
console.log(A);
let a1 = 30;
console.log(a1);
let _a = 40;
console.log(_a);
let $a = 50;
console.log($a);
// var=variable can be reached re declared & update .A global scope variable
// let=variable can be reached update but cannot be re declared .block scope variable
// const=variable cannot be re declared & cannot be updated .block scope variable
// declaration
// VAR
{
    var num1=30;
// console.log(num1);
}
console.log(num1); //iff i declare the variabele in global level any whwere in the code i can access the variable(that may be var ,let,const)
function varfun(){
    var num2=80;
    // console.log(num2);
}
// console.log(num2);  
//error num2 is not defined
// varfun();   
// if i declare a variable in function level we can accces the variable inside the function only



// LET
// declaration at global level
let name="aditya";
{
    let name="kumar";
    console.log(name); //kumar
}
// if i declare the variable inside the global level using let keybord we can access the variable any where in the code
// declaration at block level
{
    let nickname="adi";
    console.log(nickname); //adi
}
// console.log(nickname); //error nickname is not defined
// if i declare a variable in block level we can access the variable inside the block only but we canont access the variable outside the block
function letfun()
{
    let city="pune";
    console.log(city) 
}
// letfun()


// CONST
// declaration at global level
const pi=3.14;
// if i declare the variable inside the global level using const keybord we can access the variable any where in the code
// declaration at block level
{
    const gravity=9.8;
    console.log(gravity); //9.8
}
// if i declare a variable in block level we can access the variable inside the block only but we canont access the variable outside the block
function constfun()
{
    const speedOfLight=3e8;
    console.log(speedOfLight) 
}
// if i declare a variable in function level we can accces the variable inside the function only we cannot access the variable outside the function
