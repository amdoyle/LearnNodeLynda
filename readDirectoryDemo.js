var fs = require('fs');

fs.readdir('/Users/annmariedoyle/', function(err, data) {
  console.log(data);
});
