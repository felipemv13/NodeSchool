var fs = require('fs');
var dir = process.argv[1];
var ext = process.argv[2];

fs.readdir(dir, ext,'utf-8', (err, data) => {
  if (err) console.log(err);

  data.forEach(element => {
    if (path.extname(element) === process.argv[3]) {
      console.log(element);   
    } 
  });
})