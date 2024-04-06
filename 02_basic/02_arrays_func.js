const movie1=["thor","zero"];
const exp=["hi","bye"];
//way 1
// movie1.push(exp);
// console.log(movie1);
// console.log(movie1[2]); // merge arr into index
// console.log(movie1[2][1]); // to access the value of another arr
//way2
// const newarr=movie1.concat(exp);
// console.log(newarr); // merge properly
//way3
// const newarr=[...movie1,...exp];
// console.log(newarr);

const subarr=[1,2,3,[4,5,[4,3]]];  // subarry into single array
const arr=subarr.flat(Infinity);
console.log(arr);

console.log(Array.isArray("hiii"));
console.log(Array.from("hii")); //covert into arr

let s1=10;
let s2=100;
let s3=1000;

console.log(Array.of(s1,s2,s3));// creat an array
