console,console.log("extra event");

let input=document.querySelector("input")
// 


// input.addEventListener("change",(e)=>{
//     console.log("input changed",e.target.value);
// input.addEventListener("focus",(e)=>{
//     console.log(e)
 
input.addEventListener("blur",(e)=>{
    console.log(e);
    console.log("blur",e.target.value);
})


// mouse events
// mousemove,mouseup,mousedown,mouseenter,mouseleave
let p=document.querySelector("p");
// p.addEventListener("mousemove",(e)=>{
    // console.log(e);
//     console.log("mouse move");
// });
// p.addEventListener("mouseenter",(e)=>{
    // console.log(e);
//     console.log("mouse enter");
// });
// p.addEventListener("mouseleave",(e)=>{
//     console.log(e);
//     console.log("mouse leave");
// });
// p.addEventListener("mousedown",(e)=>{
    // console.log(e);
//     console.log("mouse down");
// }
// );
// p.addEventListener("mouseup",(e)=>{
    // console.log(e);
    // console.log("mouse up");
// });



// key
// keydown,keyup,keypress
// document.addEventListener("keydown",(e)=>{
//     console.log("key down",e.key);
// });
// document.addEventListener("keyup",(e)=>{
//     console.log("key up",e.key);
// });


// document.addEventListener("keypress",(e)=>{
//     console.log("object",e);
//     console.log("key press",e.key);
//     console.log("key code",e.code);
//     console.log("which",e.keyCode);
//     console.log(e.altKey);
//     console.log(e.ctrlKey);
//     console.log(e.shiftKey);
// }); 


// special events
// load DomContentLoaded,scroll,resize
// window.addEventListener("load",(e)=>{
//     console.log("window loaded");
// }); 
// document.addEventListener("DOMContentLoaded",(e)=>{
//     console.log("dom content loaded");
// });
// window.addEventListener("scroll",(e)=>{
//     console.log("window scrolled");
// });
// window.addEventListener("resize",(e)=>{
//     console.log("window resized");
// });


// form operations
let form= document.querySelector("form");
// console.log(form);
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let input=document.querySelectorAll("form input")
    let nameInputValue=input[0].value;
    let ageInputValue=input[1].value;


    localStorage.setItem("userData",JSON.stringify({nameInputValue,ageInputValue}))
    localStorage.setItem("numb",30);
    alert("successfully data stored in localstorage")
    
})

let  fetchBtn=document.getElementById("fetch");
fetchBtn.addEventListener("click",()=>{
    let data=localStorage.getItem("userData");
    let numb=localStorage.getItem("numb");
    console.log(JSON.parse(numb))
    console.log(JSON.parse(data))
})



// Task :-
// step1-
// first you have to create a register page heving fields are (fullname,age,phone ,email,password)
// step2-
// stored the register data to the LocalStorage
// step3-
// Create a login form having fields(email,password)
// step4-
// compare the user input email and password at the time of login with the email and password that have already store insidde the local storage