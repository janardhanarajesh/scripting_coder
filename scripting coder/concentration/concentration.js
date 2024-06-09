var gmwt=document.getElementById('gmwt');
var weight=document.getElementById('weight');
var molarity=document.getElementById('molarity');
var volume=document.getElementById('volume');
caluclate=()=>
{
	if(molarity.value=="")
	{
		let mol=(weight.value*1000)/(gmwt.value*volume.value)
		molarity.value=mol;
	}
	else if(gmwt.value==""){
		
let grm=(weight.value*1000)/(molarity.value*volume.value)
		gmwt.value=grm;
	}
	else if(volume.value=="")
	{
		let vol=(weight.value*1000)/(molarity.value*gmwt.value)
		volume.value=vol;

	}
	else if(weight.value=="")
	{
		let mass=(molarity.value*gmwt.value*volume.value)/1000;
		weight.value=mass;
	}
	else{
		alert('The unknown value should be empty')
	}
}

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