console.log("today some special methods");
let arr=[10,5,20,15,30,25];
let isGreater=arr.every((value)=>{
    return value>0;
}
);
console.log("is every value greater than 0 ",isGreater);
let isSomeGreater=arr.some((value)=>{
    return value>25;
}   
);
console.log("is some value greater than 25 ",isSomeGreater);
// find method
let findValue=arr.find((value)=>{
    return value>15;
}   
);
console.log("first value greater than 15 is ",findValue);
// find last method
let findLastValue=arr.findLast((value)=>{
    return value>15;
}   
);
console.log("last value greater than 15 is ",findLastValue);
// find index method    
let findIndexValue=arr.findIndex((value)=>{
    return value>15;
}
);
console.log("first index of value greater than 15 is ",findIndexValue);
// check if all string have lenghth greater than 3
let stringArr=["apple","banana","kiwi"];
let greaterThan3=stringArr.every((value)=>{
    return value.length>3;
}
);
console.log("are all strings length greater than 3 ",greaterThan3);
// check if all users are active (active = true)
let users=[
    {name:"A",active:true},
    {name:"B",active:true},
    {name:"C",active:false}
];
console.log("are all users active ",users.every((user)=>{
    return user.active==true;
}   
));

let numArr=[1,2,3,4,5,6];
console.log(numArr.every((v,i)=>numArr.indexOf(v)===i));

// 
// check if any product is out of stock
let products=[
    {name:"product1",stock:10},
    {name:"product2",stock:0},
    {name:"product3",stock:5}
];
console.log(products.some(v => v.stock===0));
// check if any user is admin
let listorder=[
    {name:"A",admin:false}
    ,{name:"B",admin:false}
    ,{name:"C",admin:true}
];
console.log("is any user admin ",listorder.some(v => v.admin===true));  
// Math
console.log(Math.PI)
console.log(Math.SQRT2)
console.log(Math.SQRT1_2)
console.log(Math.LN2)
console.log(Math.LN10)   
Math.LOG2E
// Math methods
console.log(Math.max(10,20,5,15))
console.log(Math.min(10,20,5,15))
console.log(Math.round(16.7))
console.log(Math.floor(16.909000))
console.log(Math.ceil(4.2))
console.log(Math.pow(2,3))
console.log(Math.sqrt(64))
console.log(Math.cbrt(27))
console.log(Math.abs(-10))

let obj={
    name:"Aditya",
    age:22,
    phone:1234567890
};
delete obj.phone;
console.log(obj);
// in operator
console.log("name" in obj);
console.log("phone" in obj);
// freeze method
Object.freeze(obj);
obj.age=23;
console.log(obj);
// Object methods
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(Object.fromEntries([["name","Aditya"],["age",22],["phone",1234567890]]));
let x={
    a:1,
}
let y={
    b:2,
}
let z=Object.assign(x,y);
console.log(z);

