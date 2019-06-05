// const fs = require('fs');

// const someMath = 1+1;

// fs.readFile('big-file.txt', 'utf-8', function (err, content) {

// 	if (err) return console.log(err);

// 	console.log(content)
// });

// const text = `The response is ${someMath}`;

// console.log(text);


var fs = require('fs');

fs.readFile('arquivo1.txt', 'utf-8', function (err, arquivo1) {

  fs.readFile('arquivo2.txt', 'utf-8', function (err, arquivo2) {

    fs.readFile('arquivo3.txt', arquivo1 + "\n" + arquivo2, function (err) {

      console.log('tudo certo');

    });

  });

});