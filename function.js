exports.add=function(arr)
{ 
 sum=0;
 for(var i=0;i<arr.length;i++)
  {
   sum+=arr[i];
  }
return sum;
}




exports.search=function(arr,num)
{
 for(var i=0;i<arr.length;i++)
 {
	 if(arr[i]==num)
	 {
		 return i;
	 }
 }
  return -1;
}





exports.factorial=function(num)
{
	var ans=1;
    for(var i=1;i<=num;i++)
	{
		ans=ans*i;
	}
	return ans;
}


















