var socket = io();

$('#sentimentText').on('submit', function (e) {
	e.preventDefault();

	var text = $('[name=text]')

	socket.emit('text', {
		sentimentText: text.val()
		
	}, function () {
			text.val('')
	});
});

socket.on('analysisSuccess', function (message) {
	console.log('new message', message);

	$('#results').html(
	`<div>
	<center><p>${message}</p></center>
	</div>`);

	$('.buttons').delay(1000).fadeIn(scroller);

	scroller()

});