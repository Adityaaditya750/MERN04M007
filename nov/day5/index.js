console.log("topic is array");
let arr=[10,20,30,40,50];
console.log(arr);
let newArr=new Array(60,70,80,90,100);
console.log(newArr);
// accessing array elements
console.log(arr[0]);
console.log(newArr[3]);
console.log(Array.of(arr,newArr));
 


//  average mark of array
let mark =[85,97,44,37,76,60];
let result=0;
for(let i=0;i<mark.length;i++){
    result+=mark[i];
}
console.log("total mark is ",result);
let avg=result/mark.length;
console.log("average mark is ",avg);
// in aarray  5 items  all items have 10% of on them and store in a new array 
let price =[250,645,300,900,50];
let newPrice=[];
for(let i=0;i<price.length;i++)
    {
        let discount=price[i]*0.1;
        console.log("10% of ",price[i],"is ",discount);
        let newprice=price[i]-discount;
        console.log("price after discount is ",newprice);
    }
    //  let count occurance of each element in an array (loop-only)
    let fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple'];
    console.log('\nfruits ->', fruits);

    // Implementation using only loops (no Set/filter/includes/indexOf)
    function countOccurrencesWithLoop(arr) {
        const counts = {}; // plain object to hold counts
        for (let i = 0; i < arr.length; i++) {
            const key = arr[i];
            // if a key exists, increment; otherwise initialize to 1
            if (counts[key] !== undefined) {
                counts[key] = counts[key] + 1;
            } else {
                counts[key] = 1;
            }
        }
        return counts;
    }

    const fruitCount = countOccurrencesWithLoop(fruits);
    console.log('\nfruit counts:');
    // Print counts using a for-in loop (loop-only)
    for (const f in fruitCount) {
        if (Object.prototype.hasOwnProperty.call(fruitCount, f)) {
            console.log(f + ' -> ' + fruitCount[f]);
        }
    }

    
    