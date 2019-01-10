// Cookies voor het bijhouden van data tussen home page en filtering voor centra pagina 
// visuelebegeleiding 
// auditievebegeleiding
// motorischebegeleiding

var begeleidingKeuze = document.cookie;

// Verklaren van keuze op de homepage
	function setVisueel(){
		begeleidingKeuze = "visueel";
		document.cookie = begeleidingKeuze;
	}
	function setAudio(){
		begeleidingKeuze = "auditief";
		document.cookie = begeleidingKeuze;
		cookie = document.cookie;
	}
	function setMotorisch(){
		begeleidingKeuze = "motorische";
		document.cookie =begeleidingKeuze ;
		cookie = document.cookie;
	}

// Controleren wat er in de cookie staat
function checkCookie() {
	//alert(document.cookie);
}

// De waarde van de select aanpassen aan de gekozen begeleidingsoptie 
function setOption(){
	var selected = document.cookie;
	document.getElementById('specFilter').value = begeleidingKeuze;

	alert(selected);
}

console.log(begeleidingKeuze);
