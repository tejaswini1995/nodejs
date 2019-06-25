var arr=new Array(10,20,30,45);
var arr1=[98,48,76,7];
console.log(arr.length);

sum=0;
for(var i=0;i<arr.length;i++)
{
   sum+=arr[i];
}
console.log(sum);

sum1=0;
for(var i=0;i<arr.length;i++)
{
   sum1+=arr1[i];
}
console.log(sum1);

sum3=0;
for(var i=0;i<arr.length;i++)
{
   sum3=arr[i]+arr1[i];
   console.log(sum3);
}

