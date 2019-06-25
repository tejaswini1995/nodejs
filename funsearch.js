var x=require("./function");

var arr=new Array(12,34,10,45);
var arr1=[24,74,6,94];

console.log(arr.length);
console.log(arr1.length);

var sum=x.add(arr);
var sum1=x.add(arr1);

console.log("sum:"+sum);
console.log("sum of array1:"+sum1);

var pos=x.search(arr,55);
var pos1=x.search(arr,4);

console.log("number found at:"+pos);
console.log("number found at:"+pos1);