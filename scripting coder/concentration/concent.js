concen=(con)=>
{
if(con=="nor")
{
	window.location="normal.html"
}
else if(con=="mol")
{
	window.location="index.html"

}
else if(con=="molity")
{
	window.location="molarity.html"

}


}
var gewt;
chemical=(val)=>
{
if(val==1)
{
gewt=36.5;
}
else if(val==2)
{
gewt=49;
}
else if(val==3)
{
gewt=31.5;
}
else if(val==4)
{
gewt=60.05;
}else if(val==5)
{
gewt=63;
}else if(val==6)
{
gewt=40;
}
else if(val==7)
{
gewt=56;
}
else if(val==8)
{
gewt=37;
}
else if(val==9)
{
gewt=35;
}
else if(val==10)
{
gewt=53;
}
else if(val==11)
{
gewt=84;
}
else if(val==12)
{
gewt=58,5;
}
else if(val==13)
{
gewt=32.67;
}
else if(val==14)
{
gewt=41;
}
else if(val==15)
{
gewt=40.5;
}
else if(val==16)
{
gewt=31;
}
var normality=document.getElementById('normality');
var vol=document.getElementById('volume');
var weight=document.getElementById('weight');
caluclate=()=>
{
	if(normality.value=="")
	{
		let mol=(weight.value*1000)/(gewt*volume.value)
		normality.value=mol;
	}
	
	else if(volume.value=="")
	{
		let vol=(weight.value*1000)/(normality.value*gewt)
		volume.value=vol;

	}
	else if(weight.value=="")
	{
		let mass=(normality.value*gewt*vol.value)/1000;
		weight.value=mass;
	}
	else{
		alert('The unknown value should be empty')
	}
}

}
document.onkeydown=(cod)=>{

if(cod.key==="i")
{
return false
// document.addEventListner(contextmenu,"return false")
}

}
