var nav = $("#mobileNav");

$("#mobileMenuIcon").click(function(){
	$(nav).slideToggle();
	$(".mobileIconLijn1").toggleClass('knopAnimatie1');
	$(".mobileIconLijn2").toggleClass('knopAnimatie2');
	$(".mobileIconLijn3").toggleClass('knopAnimatie3');
		
});