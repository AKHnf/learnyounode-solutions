var fs = require('fs');

var fileContent = fs.readFileSync(process.argv[2], 'utf8');

var newLineCount = fileContent.split('\n').length - 1;

console.log(newLineCount);
