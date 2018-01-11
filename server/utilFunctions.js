const fs = require('fs');
const language = require('@google-cloud/language');

const fetchData =  () => {
  try {
    var data = fs.readFileSync('./ips.json');
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};

const sentimentFunction = (output) => {

return new Promise ((resolve, reject) => {
	// Instantiates a client
const client = new language.LanguageServiceClient();

// The text to analyze
const text = output.sentimentText

const document = {
  content: text,
  type: 'PLAIN_TEXT',
};

// Detects the sentiment of the text
// client
//   .analyzeSentiment({document: document})
//   .then(results => {
//     const sentiment = results[0].documentSentiment;
//     console.log(sentiment)
//     let result 
//     console.log(`Text: ${text}`);
//     if (sentiment.score < -0.5) {
//       result = `You seem angry 😡 (${sentiment.score} score, ${sentiment.magnitude} mag)`
//       resolve(result)
//     } else if (sentiment.score > 0.5) {
//       result = `You seem very happy 🤪 (${sentiment.score} score, ${sentiment.magnitude} mag)`
//       resolve(result)
//     } else {
//       result = `You're mood is neither up nor down (${sentiment.score} score, ${sentiment.magnitude} mag)`
//       resolve(result)
//     }

//   })

// classifier
client 
  .classifyText({document: document})
  .then(results => {
  	console.log(results)
  	console.log(JSON.stringify(results[0].categories[0].name, null, 2))
  	var info = results[0].categories[0].name
  	resolve(info)
  })

}).catch(err => {
    console.error('ERROR:', err);
    reject(err)
  });

 

};

module.exports = { 
	fetchData,
	sentimentFunction
}