// Dates

let myDate=new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(typeof myDate); //object

// let myCreateDate=new Date(2021,0,21)
// console.log(myCreateDate.toDateString());
let myCreateDate=new Date("2021-01-21")
console.log(myCreateDate.toLocaleString());
let myTimeStamp=Date.now();

console.log(myTimeStamp);
console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));
console.log(myCreateDate.getDay());

// `${}`