// function
console.log("Today we go to learn rest part of function");
// arrow function
let arrowfun=()=>{
    console.log("This is arrow function");
}
arrowfun(); 
// function order function
// it is a funtion which is accepting a function as a parameter and it is returning a function
let add=(num1,num2)=>{
    console.log("This is add function",num1+num2);
}
add(2,3);
// accepting function as parameter
let hof=function(func){
    func();
}
hof(
    ()=>{console.log("This is hof function")}
)
// returning function from a function
let returnofHof=function(){
    let childFunction=function(){
        console.log("This is child function");
        return 20;
    }
    return childFunction;
}
let res=returnofHof() ();
console.log(res);
// the funtion which is used as a argument at the time function call is called callback function
// mostly we will use arrow function as a callback function

// IIFE - Immediately Invoked Function Expression
(function(){
    console.log("This is IIFE function");
})()

// array speific method
// 1 forEach method,map,filter,reduce,find,some,every,sort
// forEach method
let arr=[10,20,30,40,50];
arr.forEach((value,index)=>{
    console.log("value is ",value," index is ",index);
}   );
// map method
let newArr=arr.map((value)=>{
    return value+2;
});
console.log("new array is ",newArr);
// filter method
let filterArr=arr.filter((value)=>{
    return value>25;
});
console.log("filter array is ",filterArr);
// reduce method
let sum=arr.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
},0);
console.log("sum is ",sum);