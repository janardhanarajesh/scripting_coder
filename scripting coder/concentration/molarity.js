var molarity=document.getElementById('mol');
var noramlity=document.getElementById('norm');
var gewt=document.getElementById('gewt');
var gmwt=document.getElementById('gmwt');
caluclate=()=>
{
	if(molarity.value=="")
	{
	let mol=(noramlity.value*gewt.value)/gmwt.value;
	molarity.value=mol;
	}
	else if(noramlity.value=="")
	{
	let norm=(molarity.value*gmwt.value)/gewt.value;
	noramlity.value=norm;
	}
	else if(gmwt.value=="")
	{
	let gmw=(noramlity.value*gewt.value)/molarity.value;
	gmwt.value=gmw;
	}
	else if(gewt.value=="")
	{
	let gew=(molarity.value*gmwt.value)/noramlity.value;
	gewt.value=gew;
	}

	else{
		alert('! The unknown value should be empty')
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