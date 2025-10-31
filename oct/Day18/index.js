console.log("2nd class operator");

let num1 = 10;
let num2 = 20;

console.log(num1 + num2 / 2 * 4); // Addition
console.log (true && "Hello" ); // Logical AND
console.log(false && "World");

// if else condition
let age = 18;   
if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}
// Ternary operator
let eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(eligibility);




//practice
let num =prompt("Enter a number:");  
if (num % 5 === 0) 
{
    console.log("Divisible by 5");
} 
else 
{
    console.log("Not Divisible by 5");
}
//practice2
let mark = prompt("Enter your marks:");
if (mark >=80 && mark <= 100) {
    console.log("Grade A");
} else if (mark >= 70 && mark < 80) {
    console.log("Grade B");
} else if (mark <= 70 && mark > 60) {
    console.log("Grade C");
} else if (mark >= 60 && mark < 50) {
    console.log("Grade D");
} else if (mark >= 0 && mark < 50) {
    console.log("Grade F");
}
else {
    console.log("Invalid marks");
}
// switch case

switch (true) {
    case (mark >= 80 && mark <= 100):
        console.log("Grade A"); 
        break;
    case (mark >= 70 && mark < 80):
        console.log("Grade B");
        break;  
    case (mark >= 60 && mark < 70):
        console.log("Grade C");
        break;
    case (mark >= 50 && mark < 60):
        console.log("Grade D");
        break;
    case (mark >= 0 && mark < 50):

        console.log("Grade F");
        break;
    default:
        console.log("Invalid marks");
        break;
}   