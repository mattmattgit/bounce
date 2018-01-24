require('dotenv').config();
const Twit = require('twit');

let T = new Twit({
  consumer_key: process.env.TWIT_CONSUMER_KEY,
  consumer_secret: process.env.TWITconsumer_secret,
  access_token: process.env.TWITaccess_token,
  access_token_secret: process.env.TWITaccess_token_secret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
})

let getter = (topic) => {
	return new Promise ((resolve,reject) => {
		let reply = ['we can help you with your trip!!',
						'Travel pack have loads of great offers!',
						'we can help!!',
						'check out our holiday deals!!',
						'we have some great deals!!',
						'check out our holidays!!',
						'we can help you plan your trip!!',
						'we\'d love to help!!',
						'we have tons of great holiday deals!!',
						'we\'d love to help!!']
		console.log(topic)
		let tweets = []
		T.get('search/tweets', { q: `${topic}`, count: 10, lang: 'en' }, function(err, data, response) {
			console.log(data)
		for (let i = 0; i < data.statuses.length; i++){
			num = Math.floor(Math.random() * 10)
			console.log(num)
			let tweet = {
				"user": data.statuses[i].user.screen_name,
				"text": data.statuses[i].text,
				"id": data.statuses[i].id,
				"reply": `@${data.statuses[i].user.screen_name} ${reply[num]}`
			}
			tweets.push(tweet);
		};
		resolve(tweets)
	})	
}).catch((e) => {
	reject(e)
});

}

let sender = (input) => {
	// T.post('statuses/update', { status: '@nrhsmith hello pickle!!!', in_reply_to_status_id: '955808965870440400' }, function(err, data, response) {
	// 	console.log(data)
	// })
}

module.exports = {getter, sender}

