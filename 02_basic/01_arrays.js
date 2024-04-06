const myArray=[12,2,1,"saksham"];
const myarr=new Array(1,2,3);
console.log(myarr[2]);

myArray.push(2); // at element at last index
myArray.pop(); // remove last index
myArray.shift(); // remove from first index
myArray.unshift(9); // add at first index
console.log(myArray.includes(1)); // chech the element is in arr.
console.log(myArray.indexOf(1)); //index of elment


const newarrr=myArray.join();// convert into string
console.log(newarrr);

///   slice , splice
console.log("A ", myArray);
const myn1=myArray.splice(0,2);// remove permentaly
console.log("B ", myn1);
console.log("C ", myArray);
const myn2=myArray.slice(0,2);// dont remove from main array
