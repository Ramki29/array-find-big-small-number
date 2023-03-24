var array=[5,10,-1,-5,34,23];
var small=array[0];
for(i=0; i<array.length; i++)
	{
	if(array[i]<=small)
		{
		small=array[i];
		}
	}
document.write("smallest number is:"+"&nbsp;"+small);
document.write("<br>");
	

var array=[5,10,-1,-5,34,23];
var big=array[0];
for(i=0; i<array.length; i++)
	{
	if(array[i]>=big)
		{
		big=array[i];
		}
	}
document.write("bigest number is:"+"&nbsp;"+big);
document.write("<br>");	


let arra=[3,6,90,-23.-4,12,54,-45];
document.write("small number:"+"&nbsp;"+Math.min(...arra));
document.write("<br>");
document.write("big number:"+"&nbsp;"+Math.max(...arra));