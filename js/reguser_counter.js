function startCount(speed, endNumber)
	{
	var timer;
	timer = setInterval("count("+endNumber+")",speed);
	}

function count(endNumber)
{
	var el = document.getElementById('reguser_counter');
	var currentNumber =	parseFloat(removeCommas(el.innerHTML));
	//var endNumber = 100;
	if (currentNumber < endNumber)
	{
	el.innerHTML= currentNumber+1;
	}
}
	
//*********************************
// ADD COMMAS
//http://www.mredkj.com/javascript/numberFormat.html
//*********************************
function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

//*********************************
// REMOVE COMMAS
//http://www.trans4mind.com/personal_development/JavaScript/longnumAdd.htm
//*********************************
function removeCommas(aNum) 
{
	//remove any commas
	aNum=aNum.replace(/,/g,"");
	
	//remove any spaces
	aNum=aNum.replace(/\s/g,"");
	
return aNum;
}