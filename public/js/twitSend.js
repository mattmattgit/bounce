var socket = io();

$('#twitCategories').on('submit', function (e) {
	e.preventDefault();

	var twitCat = $('[name=text]')

	$('#searchInfo').fadeIn('fast');
	let search = `<center><strong><h3>Search summary</h3></strong></center><p><strong>Search term:</strong> ${twitCat.val()}</p>`
	$('#input').html(search);

	socket.emit('twitCat', {
		twitterCategories: twitCat.val()


		
	}, function () {
			twitCat.val('')
	});
});

socket.on('tweets', function (message) {
	console.log('New info', message)
	let text = ``
	for (let i = 0; i < message.length; i++){
		text += `<div class="twitResult"><p><strong>${message[i].user}</strong></p><p>${message[i].text}</p></div><div class="gap"></div>`
		text += `<div class="twitReply"><p><strong>Travel Pack -response</strong></p><p>${message[i].reply}🏄🏄</p></div><div class="gap"></div>`
		text += `<div class="gap"></div><div class="gap"></div>`
	}
	$('#tweetResults').html(text);
	let results = `<p><strong>Number of results: </strong>${message.length}</p>`
	$('#input').append(results);

});