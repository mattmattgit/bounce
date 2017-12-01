$('.top').fadeIn();
$('#welcome_one').delay().fadeIn();
$('#welcome_two').delay().fadeIn();
$('.buttons').delay().fadeIn();

let scroller = function () {
	 $('html, body').animate({scrollTop:1200},1000);
}

//about
$('#about').click( function () {
	$('.buttons').hide()
	$('.buttons').delay(5000).fadeIn();
	$('#about_section').insertBefore('.buttons');
	$('#about_section').show();
	for(let i = 1; i < 4; i++) {
		$(`#about_${i}`).delay(i*1000 - 500).fadeIn(scroller);
	}
	$('#more_about').delay(4000).fadeIn(scroller);
	$('#about').remove();
	$("#more_about").click( () => {
		$('#overlay_about').fadeIn("slow");	
		});
		$('#overlay_about').click( function() {
			$('#overlay_about').fadeOut("slow");
		});
});

//how 
$('#how').click( function (callback) {
	$('.buttons').hide()
	$('.buttons').delay(12000).fadeIn()
	$('#how_section').insertBefore('.buttons');
	$('#how_section').show();
	for(let i = 1; i < 11; i++) {
		$(`#how_${i}`).delay(i*1000 - 500).fadeIn(scroller);
	}
	$('#more_how').delay(11000).fadeIn(scroller);
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
});

//contact
$('#contact').click( function () {
	$('#contact_section').insertBefore('.buttons');
	$('#contact_section').fadeIn("slow");
	$('#contact').remove();
});


