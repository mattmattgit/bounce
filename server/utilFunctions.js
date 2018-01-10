const fs = require('fs');

exports.fetchData =  () => {
  try {
    var data = fs.readFileSync('./ips.json');
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};