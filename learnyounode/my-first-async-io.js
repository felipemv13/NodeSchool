var fs = require('fs');
var path = process.argv[2];

fs.readFile(path, 'utf-8', function (err, data){
  if (err) throw error;
  
  return console.log(data.split('\n').length -1);
});

/**
 * fs.readFile(file, function (err, contents) {
      if (err) {
        return console.log(err)
      }
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })
 */