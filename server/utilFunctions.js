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

const entitiesFunction = (output) => {

return new Promise ((resolve, reject) => {
	// Instantiates a client
const client = new language.LanguageServiceClient();

// The text to analyze
const text = output.sentimentText

const document = {
  content: text,
  type: 'PLAIN_TEXT',
};



// analyzeEntities

client 
  .analyzeEntities({document: document})
  .then(res => {
  	console.log(JSON.stringify(res, null, 2))
  	let info = []

  	for (let i = 0; i < res[0].entities.length; i++){
  		let eachInfo = {
  			"details": [],
  			"wordType": []
  		}
  		for (let c = 0; c < res[0].entities[i].mentions.length; c++){
  			eachInfo.details.push(res[0].entities[i].mentions[c].text.content)
  			eachInfo.wordType.push(res[0].entities[i].mentions[c].type)
  		}
  		if((JSON.stringify(res[0].entities[i].metadata)).includes("wikipedia")) {
  			eachInfo.link = res[0].entities[i].metadata.wikipedia_url
  			eachInfo.type = res[0].entities[i].type
  			
  		}
  		info.push(eachInfo);
  	}
  	// 

console.log(info)
resolve(info)
  })



}).catch(err => {
    console.error('ERROR:', err);
    reject(err)
  });
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
client
  .analyzeSentiment({document: document})
  .then(results => {
    const sentiment = Math.round(results[0].documentSentiment.score * 100)
    resolve(sentiment)

  })


}).catch(err => {
    console.error('ERROR:', err);
    reject(err)
  });
 

};

const classFunction = (output) => {

return new Promise ((resolve, reject) => {
	// Instantiates a client
const client = new language.LanguageServiceClient();

// The text to analyze
const text = output.sentimentText

const document = {
  content: text,
  type: 'PLAIN_TEXT',
};

// classifier
client 
  .classifyText({document: document})
  .then(results => {
  	console.log(results)
  	console.log(JSON.stringify(results[0].categories[0].name, null, 2))
  	var info = results[0].categories[0].name
  	resolve(info)
  }).catch((e) => {
  	resolve('Not enough info for categorization')
  })


}).catch(err => {
    console.error('ERROR:', err);
    reject(err)
  });
 

};

module.exports = { 
	fetchData,
	entitiesFunction,
	sentimentFunction,
	classFunction
}