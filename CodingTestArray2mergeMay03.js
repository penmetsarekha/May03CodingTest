/**
 * Created by rekhapenmetsa on 5/7/17.
 * write a program to merge and sort 2 arrays without duplicates
 eg : arr1={2,5,1,10}  arr2={4,3,5,10}
 o/p: {1,2,3,4,5,10}
 */

    var arr1 = [2, 5, 1, 10];
    var arr2 = [4, 3, 5, 10];
    var length = arr2.length;
    //mergeing arr1 and arr2
    for (var i = 0; i < length; i++) {
        arr1[length + i] = arr2[i];

    }
//calling the sort function and paasing the merged array.
sortArray(arr1);

function sortArray(arr1)
{
    var length1=arr1.length;
    for(var i=length1-1;i>=0;i--)
    {
        for(var j=1;j<=i;j++)
        {
            if(arr1[j-1]>arr1[j])
            {
                var temp=arr1[j-1];
                arr1[j-1]=arr1[j];
                arr1[j]=temp;
            }
        }
    }
    //after sorting removing the duplicates using splice method.
    for(var k=0;k<arr1.length;k++)
    {
        if(arr1[k]==arr1[k+1])
        {
            arr1.splice(k,1);
        }
    }
    return arr1;
}
console.log(arr1);