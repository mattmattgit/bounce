var socket = io();

socket.on('connect', function () {
	console.log('hi');

	$.getJSON('//freegeoip.net/json/?callback=?', function(data) {
		var info = data;
		socket.emit('sendIP', {
		IP: `${info.ip}`,
		city: `${info.city}`
		});	
	});	
});


$('#email-form').on('submit', function (e) {
	e.preventDefault();

	socket.emit('addEmail', {
		email: $('[name=mail]').val()
		
	}, function () {

	});
	});

socket.on('emailSuccess', function (message) {
	console.log('new message', message);

	$('#want_section').append(`<div class='gap'></div><div class='emailThanks'><p>Thanks ${message} ` + 
	`<span class="emoji">😍</span>. We'll be in touch shortly.</p></div><br>` + 
	`<div id="about_3" class="large"><p>If you haven't already why not check out some of our additional info 🤓</p></div>` +
	`<div class="gap"></div>` +
	`<div id="more_about" class="view_more"><center><p>More info +</i></p></center></div>` +
	`<div class="gap"></div>`)

	scroller()

});



socket.on('disconnect', function () {
	console.log('broken');
});