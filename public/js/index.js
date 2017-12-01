$('.top').fadeIn();
$('#welcome_one').delay(1000).fadeIn();
$('#welcome_two').delay(2000).fadeIn();
$('.buttons').delay(3000).fadeIn();

let scroller = function () {
	 $('html, body').animate({scrollTop:5000},1000);
}

const key = 'ddeff3a422bf4bb0bf7b4d3e630e448c'

var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          `apiKey=${key}`;


var num = Math.floor((Math.random() )* 3)

$.get( url, function( data ) {
  $('#how_7').html(`<div class="row"><center><strong>${data.articles[num].title}</strong></center></div>` + `<hr>` +
  	`<div class="row"><center><img src="${data.articles[num].urlToImage}" width="250px"/></center></div>` + `<br>` +
  	`<div class="row">${data.articles[num].description}</div>` + `<hr>` +
  	`<a href="${data.articles[num].url}"><p>${data.articles[num].url}</p></a>`);
});

switch (num) {
    case 0:
        $('#how_5').html('<div class="row"><center><img src="/img/breakfast.jpg" width="250px"/></center></div>');
        break;
    case 1:
        $('#how_5').html('<div class="row"><center><img src="/img/arm-pillow.jpg" width="250px"/></center></div>');
        break;
    case 2:
        $('#how_5').html('<div class="row"><center><img src="/img/doggy.jpg" width="250px"/></center></div>');
        break;
}

//about
$('#about').click( function () {
	$('.buttons').hide()
	$('#about_section').insertBefore('.buttons');
	$('#about_section').show();
	for(let i = 1; i < 4; i++) {
		$(`#about_${i}`).delay(i*1000 - 500).fadeIn(scroller);
	}
	$('#more_about').delay(4000).fadeIn(scroller);
	$('.buttons').delay(5000).fadeIn(scroller);
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
	$('#how_section').insertBefore('.buttons');
	$('#how_section').show();
	var c = 1500
	for(let i = 1; i < 11; i++) {
		$(`#how_${i}`).delay(i * c - 500).fadeIn(scroller);
	}
	$('#more_how').delay(12 * c).fadeIn(scroller);
	$('.buttons').delay(13 * c).fadeIn(scroller)
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


