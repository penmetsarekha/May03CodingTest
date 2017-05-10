/**
 * Created by rekhapenmetsa on 5/3/17.
 * write a program that sorts array of elements by ignoring the negative sign of integers.
 eg: i/p : {2, 10, -5}
 o/p : {2, -5, 10}
 */
var arr=[2,10,-5];
var length=arr.length;
for(var i=length-1;i>=0;i--)
{
for(var j=1;j<=i;j++)
{
    if(Math.abs(arr[j-1])>Math.abs(arr[j])) {
        var temp=arr[j-1];
        arr[j-1]=arr[j];
        arr[j]=temp;
    }
}
}
console.log(arr);
