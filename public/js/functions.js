//FUNCTIONS

window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth' 
});
//scrolling
const scroller = function () {
	 $("html, body").animate({ scrollTop: $("body").height() }, "slow");
}

//time
let timeNow = moment().format('h:mm a')

//overlay and menu functions

const overlayIn = function () {
	$('#overlay_about').slideDown("slow");	
	$('#close').delay(1000).slideDown("slow");	
		}

$('#menu').on('click', function () {
	if ($('.tab-items-list-mob').css('display') == 'none') {
		$('.tab-items-list-mob').fadeIn();
		$('#close').fadeOut();
	} else {
		$('.tab-items-list-mob').hide();
	}
	
})

$('#hide').on('click', function () {
		$('.tab-items-list-mob').fadeOut();
		$('#close').fadeIn();
})

$('.tab-item-mob').on('click', function () {
		$('.tab-items-list-mob').fadeOut();
})

$('#close').on('click', function () {
		$('#overlay_about').fadeOut("slow");
		$('#close').hide();

})

$('#overlay-clicker').click( function() {
		$('#overlay_about').fadeOut("slow");
		$('#close').hide();
	});

//news stories
const newsFunction = function () {
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
};


//pictures
const picsFunction = function () {
	let num = Math.floor((Math.random() ) * 5)

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

};
}

//location
const locationFunction = function () {
	$.getJSON('//freegeoip.net/json/?callback=?', function(data) {
  	$('#how_9').html(`<div>From ${data.city}, ${data.region_name} to the North Pole is ${Math.round(data.latitude * 69)} miles.</div>` + '<br' +
  	`<div class="row"><center><img src="/img/north-pole.jpg" width="250px"/></center></div>`);
  	console.log(data)
});
}


