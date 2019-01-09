var nav = $("#mobileNav");


$("#mobileMenuIcon").click(function(){
	$(nav).slideToggle();
	$(".mobileIconLijn1").toggleClass('knopAnimatie1');
	$(".mobileIconLijn2").toggleClass('knopAnimatie2');
	$(".mobileIconLijn3").toggleClass('knopAnimatie3');
});




$(window).on('resize', function(){
	if($(this).width() <= 890){
		$("#mobileNav").css("display", "none");
	}
	if($(this).width() >= 890){
		$("#mobileNav").css("display", "inline-block");
		$(".mobileIconLijn1").removeClass('knopAnimatie1');
		$(".mobileIconLijn2").removeClass('knopAnimatie2');
		$(".mobileIconLijn3").removeClass('knopAnimatie3');
	};
});