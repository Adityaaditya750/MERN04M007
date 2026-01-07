let boxNAmes=document.getElementsByClassName("box");
console.log(boxNAmes.length);

// html collection are live
// let div=document.createElement("div");
// div.className="box";
// div.innerText="item5";
// document.body.appendChild(div);
// console.log(boxNAmes.length);


// using query selector all
let boxes=document.querySelectorAll(".box");
console.log(boxes.length);

// let div=document.createElement("div");
// div.className="box";
// div.innerText="item5";
// document.body.appendChild(div);
// console.log(boxes.length);
// document.body.style.backgroundColor="lightblue";
// document.body.style.cssText="font-size:50px;";
console.log("do0cument.body.firstchild.firstchild.innerText");
console.log(document.body.lastChild);
console.log(document.body.childNodes);
console.log(document.body.children);
let p=document.getElementById("para");
console.log(p)
p.classList.add("text-large");
p.classList.remove("para2");
console.log(p.classList);
console.log(p.classList.contains("para3"));
p.classList.toggle("para3");