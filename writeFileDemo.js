var fs = require('fs');

var userString = '{ "user": "Am" }';

fs.writeFile('user.json', userString);

var am = {
  name: "am doyle"
};

fs.writeFile('am.json', JSON.stringify(am));
