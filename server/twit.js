const axios = require('axios');
const Twit = require('twit');

var T = new Twit({
  consumer_key:         'wxvRWbpt6sN8GfxKD1esmiJU7',
  consumer_secret:      '4X9noURhKRmqXktS7zUmUvk3TRkdpYfekKtaxVmtciSRzdnXjL',
  access_token:         '955456775536435200-uNoQtPePbBZ9NjsStGUNC9mhHKc18EZ',
  access_token_secret:  'KmVWRRCAhZFCgwWe4W3amwu7sT6khnpnSTTlap4RxsFTF',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
})

let getter = (topic) => {
	return new Promise ((resolve,reject) => {
		console.log(topic)
		let tweets = []
		T.get('search/tweets', { q: `${topic} since:2018-01-23`, count: 10 }, function(err, data, response) {
			// console.log(data)
		for (let i = 0; i < data.statuses.length; i++){
			let tweet = {
				"user": data.statuses[i].user.screen_name,
				"text": data.statuses[i].text,
				"id": data.statuses[i].id,
				"reply": `@${data.statuses[i].user.screen_name} we can help with your trip!`
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
	T.post('statuses/update', { status: '@nrhsmith hello pickle!!!', in_reply_to_status_id: '955808965870440400' }, function(err, data, response) {
		console.log(data)
	})
}

module.exports = {getter, sender}

