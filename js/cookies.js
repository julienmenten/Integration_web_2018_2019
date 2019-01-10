// Cookies voor het bijhouden van data tussen home page en filtering voor centra pagina 
// visuelebegeleiding 
// auditievebegeleiding
// motorischebegeleiding

var begeleidingKeuze = document.cookie;



// Verklaren van keuze op de homepage
function setVisueel(){
	begeleidingKeuze = "visuelebegeleiding";
	document.cookie = begeleidingKeuze;
	alert(begeleidingKeuze);
}

function setAudio(){
	begeleidingKeuze = "auditievebegeleiding";
	document.cookie = begeleidingKeuze;
	cookie = document.cookie;
	alert(begeleidingKeuze);
}

function setMotorisch(){
	begeleidingKeuze = "motorischebegeleiding";
	document.cookie =begeleidingKeuze ;
	cookie = document.cookie;
	alert(begeleidingKeuze);
}

function checkCookie() {
	alert(document.cookie);
}

console.log(begeleidingKeuze);
