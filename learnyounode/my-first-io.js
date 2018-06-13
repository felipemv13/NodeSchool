var fs = require('fs');
var path = process.argv[2];
var bf = fs.readFileSync(path).toString();
console.log(bf.split('\n').length - 1);

/*
 * var contents = fs.readFileSync(process.argv[2])
 * var lines = contents.toString().split('\n').length - 1
 * console.log(lines)
*/