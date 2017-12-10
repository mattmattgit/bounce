var d = 250,
 	c = 2500

// var d = 0,
//  	c = 0

//opening
$('.top').fadeIn();
$('#time').text(timeNow).fadeIn();
$(`#text_loader_1`).fadeIn().delay(2 * d).fadeOut(function () {
		$(this).remove();
	});
$('#welcome_one').delay(6 * d).fadeIn();
$(`#text_loader_2`).delay(8 * d).fadeIn().delay(3 * d).fadeOut(function () {
		$(this).remove();
	});
$('#welcome_two').delay(14 * d).fadeIn();
$('.buttons').delay(18 * d).fadeIn();

//about section
$('#about').click( scroller, function () {
	$('.buttons').hide();
	$('#about').remove();
	$('#want').css('display', 'inline-block');
	$('#about_section').insertBefore('.buttons');
	$('#about_section').show();
	$(`#about_loader_1`).fadeIn(scroller).delay(750).fadeOut(function () {
			$(this).remove(scroller);
		});
	$(`#about_1`).delay(c - 1000).fadeIn(scroller);
	for(let i = 2; i < 5; i++) {
		$(`#about_${i}`).delay(i * c - 500).fadeIn(scroller);
	}
	for(let i = 1; i < 4; i++) {
			$(`#about_loader_${i + 1}`).delay(i * c - 250).fadeIn(scroller).delay(1500).fadeOut(function () {
			$(this).remove(scroller);
		});
	};
	$('#more_about').delay(3 * c).fadeIn(scroller);
	$('.buttons').delay(3.5 * c).fadeIn(scroller);
	$("#more_about").click( () => {
		$('#overlay_about').slideDown("slow");	
		});
		$('#overlay-clicker').click( function() {
			$('#overlay_about').fadeOut("slow");
		});
});

//how section
$('#how').click( scroller, function (callback) {
	newsFunction();
	picsFunction();
	locationFunction();
	$('.buttons').hide()
	$('#how').remove();
	$('#want').css('display', 'inline-block');
	$('#how_section').insertBefore('.buttons');
	$('#how_section').show();
	$(`#how_loader_1`).fadeIn(scroller).delay(750).fadeOut(function () {
			$(this).remove(scroller);
		});	
	$(`#how_1`).delay(c - 1000).fadeIn(scroller);
	for(let i = 2; i < 11; i++) {
		$(`#how_${i}`).delay(i * c - 500).fadeIn(scroller);
		console.log(`bubble in ${i}`, i * c - 500)
	}
	for(let i = 1; i < 10; i++) {
			$(`#how_loader_${i + 1}`).delay(i * c - 250).fadeIn(scroller).delay(1500).fadeOut(function () {
			$(this).remove(scroller);
		});
	};
	$('#more_how').delay(10 * c).fadeIn(scroller);
	$('.buttons').delay(10.5 * c).fadeIn(scroller);
	$("#more_how").click( () => {
		$('#overlay_about').fadeIn("slow");		
		});
		$('#overlay-clicker').click( function() {
			$('#overlay_about').fadeOut(scroller);
		});
});

//demo section
// $('#demo').click( function () {
// 	$('#demo_section').insertBefore('.buttons');
// 	$('#demo_section').fadeIn("slow");
// 	$('#demo').remove();
// 	$("#more_demo").click( () => {
// 		$('#overlay_demo').fadeIn("slow");		
// 		});
// 		$('#overlay_demo').click( function() {
// 			$('#overlay_demo').fadeOut("slow");
// 		});
// });

//contact section
$('#contact').click( scroller, function () {
	$('.buttons').hide();
	$('#contact').remove();
	$('#want').css('display', 'inline-block');
	$('#contact_section').insertBefore('.buttons');
	$('#contact_section').show();
	$('#contact_loader_1').delay().fadeIn().delay(c - 2000).fadeOut(function () {$(this).remove(scroller)});
	$('#contact_1').delay(c - 1000).fadeIn(scroller);
	$('#contact_loader_2').delay(c - 500).fadeIn().delay(1000).fadeOut(function () {$(this).remove(scroller)});
	$('#contact_2').delay(2 * c - 1000).fadeIn(scroller);
	
	$('.buttons').delay(3 * c -1500).fadeIn(scroller);
});

// i want one section
$('#want').click( scroller, function () {
	$('.buttons').hide();
	$('#want').remove();
	$('#want_section').insertBefore('.buttons');
	$('#want_section').show();
	$('#want_loader_1').delay().fadeIn().delay(c - 2000).fadeOut(function () {$(this).remove(scroller)});
	$('#want_1').delay(c - 1000).fadeIn(scroller);
	$('#want_loader_2').delay(c - 500).fadeIn().delay(1000).fadeOut(function () {$(this).remove(scroller)});
	$('#want_2').delay(2 * c - 1000).fadeIn(scroller);
});

$('#menu').on('click', function () {
	// var item = '.tab-item'
	if ($('.tab-items-list-mob').css('display') == 'none') {
		$('.tab-items-list-mob').show().slideDown("slow");
	} else {
		$('.tab-items-list-mob').hide();
	}
	
})

$('.tab-item-hide').on('click', function () {
	// var item = '.tab-item'
		$('.tab-items-list-mob').hide();

	
})