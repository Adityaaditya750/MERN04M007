console.log("today we learning DOM")
//get element by id
let elem=document.getElementById("head");
console.log(elem.innerText);
// get element by class name
let elemsByClass=document.getElementsByClassName("myClass");
console.log(elemsByClass[0].textContent);
elemsByClass[1].innerHTML="<b>changed item2</b>";
console.log(elemsByClass[1].innerHTML);
// get element by tag name
let elemsByTag=document.getElementsByTagName("p");
console.log(elemsByTag[0].textContent);
