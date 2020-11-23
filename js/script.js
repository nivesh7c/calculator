function oldvalue()                                           
{
	return document.getElementById("oldnum-value").innerText;
}
function printoldvalue(number)
{
	document.getElementById("oldnum-value").innerText=number;
}
function finalvalue()
{
	return document.getElementById("finalnum-value").innerText;
}
function printfinalvalue(number)
{
	if(number=="")
	{
		document.getElementById("finalnum-value").innerText=number;
	}
	else
	{
		document.getElementById("finalnum-value").innerText=getFormattedNumber(number);
	}
}
function getFormattedNumber(number)
{
	if(number=="-")
	{
		return "";
	}
	var n = Number(number);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(number)
{
	return Number(number.replace(/,/g,''));
}
 // maths operation 
var operator = document.getElementsByClassName("maths");  
for(var i =0;i<operator.length;i++)
{
	operator[i].addEventListener('click',function()          
	{
		// clean all number
		if(this.id=="clean")
		{
			printoldvalue("");
			printfinalvalue("");
		}
		// delete number
		else if(this.id=="delete")                        
		{
			var final=reverseNumberFormat(finalvalue()).toString();
			if(final)
			{                                            
				final= final.substr(0,final.length-1);
				printfinalvalue(final);
			}
		}
		else
		{
			var final=finalvalue();
			var old=oldvalue();
			if(final==""&&old!="")
			{
				if(isNaN(old[old.length-1]))
				{
					old= old.substr(0,old.length-1);
				}
			}
			if(final!="" || old!="")
			{
				final= final==""?final:reverseNumberFormat(final);
				old=old+final;
				if(this.id=="=")
				{
					var result=eval(old);
					printfinalvalue(result);
					printoldvalue("");
				}
				else
				{
					old=old+this.id;
					printoldvalue(old);
					printfinalvalue("");
				}
			}
		}

	});
}
var number = document.getElementsByClassName("num");
for(var i =0;i<number.length;i++)
{
	number[i].addEventListener('click',function()
	{
		var final=reverseNumberFormat(finalvalue());
		if(final!=NaN)
		{                                                 
			final=final+this.id;
			printfinalvalue(final);
		}
	});
}
