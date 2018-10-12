var fs = require('fs');
var https = require('https');
console.log("Hello world");
fs.writeFile(__dirname + "/index.html", "<h1>HTML is great</h1>", function(error) {
  if (error) {
    return console.log(error);
  } else {
    return console.log("Congrats");
  }
});

var myPhotoLocation = 'https://github.com/bhagwatn2021/GW-HSA-Website/blob/master/images/Image1.jpeg';

https.get(myPhotoLocation, function(response) {
  response.pipe(fs.createWriteStream(__dirname + "/Image1.jpeg"));
});
