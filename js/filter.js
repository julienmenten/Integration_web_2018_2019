$("#filterBevestiging").click(function(){
			var begeleiding = $("#specFilter").val();
			var regio = $("#regioFilter").val();
			var leeftijd =$("#leeftijdFilter").val();
			
			var filter = $(["class*='."+ begeleiding +"."+ leeftijd +"."+ regio +"'"]);
			
			$("div.organisatie").css("display", "inline-flex");				
			$("div.organisatie:not("+"." + begeleiding +"."+ leeftijd +"."+ regio +")").css( "display", "none" );
	
	console.log(begeleiding);
	console.log(leeftijd);
	console.log(regio);
});

/*
Lijst van mogelijke waarden: 
- begeleiding: 
	- all
	- visueel
	- auditief
	- neuromotorisch
	
- leeftijd:
	- all
	- kinderen
	- jongeren
	- volwassenen
	
- regio
	- all
	- brussel
	- limburg
	- o-vlaanderen
	- v-brabant
	- w-vlaanderen
*/