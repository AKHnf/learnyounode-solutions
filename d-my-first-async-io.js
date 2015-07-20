var fs = require('fs');

var filePath = process.argv[2];

fs.readFile(filePath, 'utf8', function (err, fileContent) {
  var newLineCount = fileContent.split('\n').length - 1;

  console.log(newLineCount);
});
