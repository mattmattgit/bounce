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

socket.on('sentSuccess', function (message) {
	console.log('New info', message);
	let score = (message + 100)/2
	let text
	if (message < -50) {
		text = `<div class="sentBad"><p><strong>Tone analysis:</strong> Negative 😡</p><p><strong>Score:</strong> ${score}/100</p></div>`
	} else if (message > 50) {
		text = `<div class="sentGood"><p><strong>Tone analysis:</strong> Positive 🤗<p><strong>Score:</strong> ${score}/100</p></div>`
	} else if (message > -1){
		text = `<div class="sentModGood"><p><strong>Tone analysis:</strong> Generally positive 🙂<p><strong>Score:</strong> ${score}/100</p></div>`
	} else {
		text = `<div class="sentModBad"><p><strong>Tone analysis:</strong> Generally negative 😔<p><strong>Score:</strong> ${score}/100</p></div>`
	}
	$('#sentResults').html(text);

});

socket.on('classSuccess', function (message) {
	console.log('New info', message);

	let split = message.split("/")

	let text = `<div class="classRes"><p><strong>Categories:</strong>`

	for (let i = 0; i < split.length; i++){
		text += `<p>${split[i]}</p>`
	}

	text += `</div>`

	$('#classResults').html(text);

});

socket.on('analysisSuccess', function (message) {
	console.log('New info', message);



	let text = ``
	let className = ``
	for (let i = 0; i < message.length; i++){
		
		if (message[i].type === 'PERSON'){
			className = 'person'
		} else if (message[i].type === 'ORGANIZATION') {
			className = 'organization'
		} else if (message[i].type === 'LOCATION') {
			className = 'location'
		} else {
			className = 'other'
		}

		if (message[i].type != undefined){
			text += `<div class="entity ${className}">`
			text += `<p><strong>Word:</strong> ${message[i].details[0]}</p>`
			text += `<p><strong>Category:</strong> ${message[i].type}</p>`
			// text += `<p><strong>Word type:</strong> ${message[i].wordType[0]}</p>`
			for (let c = 1; c < message[i].details.length; c++){
				text += `<p><strong>Other tags:</strong> ${message[i].details[c]}</p>`
			}
			
			if (JSON.stringify(message[i]).includes('link')){
				text += `<p><strong>Link:</strong> <a href="${message[i].link}">${message[i].link}</a></p>`
			}
			text += `</div><div class="gap"></div>`
		}
		

	}

	text += `</div><br><br>`

	$('#results').html(text);

});

