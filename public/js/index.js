$('.top').fadeIn();
$('#welcome_one').delay(1000).fadeIn();
$('#welcome_two').delay(2000).fadeIn();
$('.buttons').delay(3000).fadeIn();

let scroller = function () {
	 $("html, body").animate({ scrollTop: $("body").height() }, "slow");

}

//location
$.getJSON('//freegeoip.net/json/?callback=?', function(data) {
  console.log(data);
  $('#how_9').html(`<div>From ${data.city}, ${data.region_name} to the North Pole is ${data.latitude * 69} miles.</div>` + '<br' +
  	`<div class="row"><center><img src="/img/north-pole.jpg" width="250px"/></center></div>`)
});

//news stories
const keyNews = 'ddeff3a422bf4bb0bf7b4d3e630e448c'

let urlNews = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          `apiKey=${keyNews}`;

let num = Math.floor((Math.random() ) * 5)

$.get( urlNews, function( data ) {
  $('#how_7').html(`<div class="row"><center><strong>${data.articles[num].title}</strong></center></div>` + `<hr>` +
  	`<div class="row"><center><img src="${data.articles[num].urlToImage}" width="250px"/></center></div>` + `<br>` +
  	`<div class="row">${data.articles[num].description}</div>` + `<hr>` +
  	`<a href="${data.articles[num].url}"><p>${data.articles[num].url}</p></a>`);
});

//pictures

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
    case 3:
        $('#how_5').html('<div class="row"><center><img src="/img/shower-curtain.jpg" width="250px"/></center></div>');
        break;
    case 4:
        $('#how_5').html('<div class="row"><center><img src="/img/bacon-bandages.jpg" width="250px"/></center></div>');
        break;
}

var c = 2000

//about
$('#about').click( function () {
	$('.buttons').hide()
	$('#about_section').insertBefore('.buttons');
	$('#about_section').show();
	$(`#about_1`).delay(c - 1000).fadeIn(scroller);
	for(let i = 2; i < 4; i++) {
		$(`#about_${i}`).delay(i * c).fadeIn(scroller);
	}
	$('#more_about').delay(4 * c).fadeIn(scroller);
	$('.buttons').delay(5 * c).fadeIn(scroller);
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
	$(`#how_1`).delay(c -1000).fadeIn(scroller);
	for(let i = 2; i < 11; i++) {
		$(`#how_${i}`).delay(i * c - 500).fadeIn(scroller);
	}
	$('#more_how').delay(12 * c).fadeIn(scroller);
	$('.buttons').delay(13 * c).fadeIn(scroller);
	$('#how').remove();
	$("#more_how").click( () => {
		$('#overlay_how').fadeIn("slow");		
		});
		$('#overlay_how').click( function() {
			$('#overlay_how').fadeOut("slow");
		});
});

//demo
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

//contact
$('#contact').click( function () {
	$('.buttons').hide()
	$('#contact_section').insertBefore('.buttons');
	$('#contact_section').show();
	$('#contact_1').delay(c).fadeIn();
	$('#contact_2').delay(2 * c).fadeIn();
	$('#contact').remove();
	$('.buttons').delay(3 * c).fadeIn(scroller);
});


