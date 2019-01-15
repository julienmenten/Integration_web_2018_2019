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

// Sticky filter 
var num = 60;

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('#filter').addClass('sticky');
		$('.grid').css("padding-top","120px");
    } else {
        $('#filter').removeClass('sticky');
		$('.grid').css("padding-top","00px");
    }
});

// Mobile versie van de filter balk
$("#mobileFilter").click(function(){
	$('.filter-container').slideToggle().toggleClass('mobileFilterToggle');
	
});
// Fix voor het verdwijnen van de filter balk bij resize van schermbreedte
$(window).on('resize', function(){
	if($(this).width() <= 1193){
		
		$(".filter-container").addClass('mobileFilterToggle');
		$(".filter-container").css("display","none");
	};
	if($(this).width() >= 1193){
		$(".filter-container").removeClass('mobileFilterToggle');
		$(".filter-container").css("display","block");
	};
});

