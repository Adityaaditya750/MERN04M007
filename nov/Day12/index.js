let btn=document.querySelector("#btn");
// btn.addEventListener("click",()=>{
//     console.log("button clicked")
// })

// // chage,input,focus
let input=document.querySelector("input");
// input.addEventListener("input",()=>{
//     console.log("focused")
// })
// // dbclick, mouseover, submit

let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("form is submitting")
})

// // load
// // document.body.addEventListener("load",()=>{
// //     console.log("Page loading")
// // })

// // keyup, keydown, keypress
// btn.addEventListener("keydown",()=>{
//     console.log("key down")
// })

let p=document.querySelector("p")
// p.addEventListener("touchstart",()=>{
//     console.log("Touched start")
// })

// Event object

btn.addEventListener("touchstart",(e)=>{
    console.log(e.type);
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.srcElement);
    console.log(e.altKey);
    console.log(e.timeStamp)
})
// whenever the event is executing at that time a event object is created
// how to get the event object
//  ans:- by passing any variable inside the event handing function

btn.addEventListener("keypress",(e)=>{
    console.log(e.type);
})


input.addEventListener("input",(e)=>{
    console.log(e.target.value);
})

// preventDefault()
// stopPropagation()


// clintX, clintY

let light=document.querySelector(".spotlight");

document.addEventListener("mousemove", (e)=>{
    console.log(e.clientX);
    console.log(e.clientY);
    console.log("Hii")
    light.style.left=e.clientX +"px";
    light.style.top=e.clientY +"px";
})