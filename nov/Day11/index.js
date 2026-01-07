console.log("today we are going to learn how to create element by using js");


// createElement();
let h1=document.createElement("h1");
console.log(h1);
h1.innerText="this is heading";
// h1.classList.add("heading")
h1.className="heading"

document.body.appendChild(h1)


let div=document.getElementById("box");
// div.appendChild(h1)

let p=document.createElement("p");
p.innerText="this is the paragraph"


let b=document.createElement("b")
b.innerText="this is the bold tag"


// div.appendChild(p)
div.append(h1,p,b) //add at last node


let h5=document.createElement("h5")
h5.innerText="this is heading 5"

div.prepend(h5); //add at first node

let i=document.createElement("i")
i.innerText="this is italic word"

// div.before(i);
div.after(i);

let imgContainer=document.createElement("div")
imgContainer.style.cssText="width:300px;height:300px;border:1px solid black;"


let img=document.createElement("img");
img.setAttribute("src","https://images.pexels.com/photos/34772487/pexels-photo-34772487.jpeg");
img.style.cssText="width:100%;height:100%";

imgContainer.append(img);
document.body.append(imgContainer);

// Event - it is an object that change in  the state.
//  Events are fired to notify of"interesting changes "that may affect vode execution"".


let clickedFunc=()=>{
    console.log("button clicked")
}

let btn=document.getElementById("btn");
btn.onclick=()=>{
    console.log("id btn clicked");
}

// pointer.addEventListener(event_name, event_handling_function,propagation_type)

// propagation by default type is bubble we have to change it into capturing.

let button=document.getElementById("btn_1");
button.addEventListener("click",()=>{
    console.log("AddEvent listner btn execute");
},false);



document.querySelector(".images").addEventListener("click",()=>{
    console.log("parent ul clicked");
},true)

let pic=document.getElementById("flower");
pic.addEventListener("click",(e)=>{
     e.stopPropagation();
    console.log("flower img clicked")
})