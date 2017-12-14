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

	$('#want_section').append(
	`<div class='gap'></div>
	<div class='emailThanks'>
		<p>Thanks ${message}
		<span class="emoji">😍</span>.
		</p>
	</div>
	<div class='gap'></div>
	<div class='emailThanks'>
		<p>We'll be in touch shortly.</p>
	</div>
	<br>`);

	$('.buttons').delay(1000).fadeIn(scroller);

	scroller()

});

socket.on('disconnect', function () {
	console.log('broken');
});

