$(function () {
	var body = $('#fotoshome');
	var backgrounds = ['url(../images/homepagebackground.jpg)', 'url(../images/homepagebackground2.jpg)', 'url(../images/homepagebackground3.jpg)','url(../images/homepagebackground4.jpg)'];
	var current = 0;

	function nextBackground() {
		body.css('background-image',backgrounds[current = ++current % backgrounds.length] );
		setTimeout(nextBackground, 6000);
		}
		setTimeout(nextBackground, 6000);
		body.css('background-image', backgrounds[0]);
});
