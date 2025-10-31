//for in loop
let arr = [10,20,30,40,50];
for(let index in arr){
    console.log("index is "+index+" value is "+arr[index]);
}
let obj={
    name:"Aditya",
    age:22,
    city:"Pune"
};  
for(let key in obj){
    console.log("key is "+key+" value is "+obj[key]);
}
// for loop
for(let i=0;i<arr.length;i++){
    console.log( i+"value is "+arr[i]);
}
// for off loop
for(let value of arr){
    console.log("value is "+value);
}

let numArr=[100,200,300,400,500];
for(let val of numArr){
    console.log(val);
}
