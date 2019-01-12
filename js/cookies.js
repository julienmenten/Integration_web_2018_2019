// Cookies voor het bijhouden van data tussen home page en filtering voor centra pagina 
// visuelebegeleiding 
// auditievebegeleiding
// motorischebegeleiding

var begeleidingKeuze = document.cookie;
// Reminder: schrijf code om ervoor te zorgen dat er automatisch word gescrolled wanneer een bepaalde begeleiding optie is gekozen op home page, dit word wel gereset bij het surfen naar andere pagina. 
// Bug ij autoscroll op smartphone

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
		document.cookie = begeleidingKeuze ;
	}
// Resetten van cookie naar "all" opties 
function resetCookie(){
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
	// De gekozen specialeit vanop de homepage kiezen in de select element
	document.getElementById('specFilter').value = begeleidingKeuze;
	//Direct opzoeken naar gekozen specialiteit
	filterCentra();
	// Fix voor filterpijl dat fout afgebeeld word (omgekeerd)
	$(".arrowBtn>img").removeClass("arrowAnimation");
	$(".arrowBtn>p").removeClass("filterTextAnimation");
	// vermijden dat de filter menu open staat wanneer de pagina inlaad
	if($(window).width() <= 1193){
		$('.filter-container').toggle().removeClass('mobileFilterToggle');
	};

}

console.log(document.cookie);