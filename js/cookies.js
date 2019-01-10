// Cookies voor het bijhouden van data tussen home page en filtering voor centra pagina 
// visuelebegeleiding 
// auditievebegeleiding
// motorischebegeleiding

var begeleidingKeuze = document.cookie;

// Verklaren van keuze op de homepage 
if(begeleidingKeuze == ""){
	begeleidingKeuze = "all";
	document.cookie = begeleidingKeuze;
}
	//Kiezen welke type begeleiding je wenst te vertonen op centra pagina
	function setVisueel(){
		begeleidingKeuze = "visueel";
		document.cookie = begeleidingKeuze;
	}
	function setAudio(){
		begeleidingKeuze = "auditief";
		document.cookie = begeleidingKeuze;		
	}
	function setMotorisch(){
		begeleidingKeuze = "neuromotorisch";
		document.cookie = begeleidingKeuze;
	}
// Resetten van cookie naar "all" opties 
function setAll(){
	//begeleidingKeuze = "all";
	//document.cookie = begeleidingKeuze;
}

/*
// Controleren wat er in de cookie staat
function checkCookie() {
	//alert(document.cookie);
}
*/

// De waarde van de select aanpassen aan de gekozen begeleidingsoptie 
function setOption(){
	var selected = document.cookie;
	document.getElementById('specFilter').value = begeleidingKeuze;
	filterCentra();
}

console.log(begeleidingKeuze);
