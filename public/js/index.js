$('.top').fadeIn(500);
$('#welcome_one').delay(500).fadeIn();
$('#welcome_two').delay(1500).fadeIn();
$('.buttons').delay(3000).fadeIn();

let scroller = function () {
	// window.scrollTo(0,document.body.scrollHeight)
	 $('html, body').animate({scrollTop:1200},2000);
}

//about
$('#about').click( function () {
	$('.buttons').hide()
	$('.buttons').delay(5000).fadeIn()
	$('#about_section').insertBefore('.buttons');
	$('#about_section').show();
	$('#about_one').delay(500).fadeIn(scroller);
	$('#about_two').delay(1500).fadeIn(scroller);
	$('#more_about').delay(3000).fadeIn(scroller);
	$('#about').remove();
	$("#more_about").click( () => {
		$('#overlay_about').fadeIn("slow");	
		});
		$('#overlay_about').click( function() {
			$('#overlay_about').fadeOut("slow");
		});
window.scrollTo(0,document.body.scrollHeight).delay
});

//how 
$('#how').click( function (callback) {
	$('.buttons').hide()
	$('.buttons').delay(5000).fadeIn()
	$('#how_section').insertBefore('.buttons');
	$('#how_section').show();
	$('#how_one').delay(500).fadeIn(scroller);
	$('#how_two').delay(2000).fadeIn(scroller);
	$('#more_how').delay(4000).fadeIn(scroller);
	$('#how').remove();
	$("#more_how").click( () => {
		$('#overlay_how').fadeIn("slow");		
		});
		$('#overlay_how').click( function() {
			$('#overlay_how').fadeOut("slow");
		});

});

//demo
$('#demo').click( function () {
	$('#demo_section').insertBefore('.buttons');
	$('#demo_section').fadeIn("slow");
	$('#demo').remove();
	$("#more_demo").click( () => {
		$('#overlay_demo').fadeIn("slow");		
		});
		$('#overlay_demo').click( function() {
			$('#overlay_demo').fadeOut("slow");
		});
window.scrollTo(0,document.body.scrollHeight);
});

//contact
$('#contact').click( function () {
	$('#contact_section').insertBefore('.buttons');
	$('#contact_section').fadeIn("slow");
	$('#contact').remove();
window.scrollTo(0,document.body.scrollHeight);
});


