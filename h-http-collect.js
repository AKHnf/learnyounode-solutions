var http = require('http')
var url = process.argv[2]
var appendedChunks = []

http.get(url, function (response) {
  response.setEncoding('utf8')

  response.on('data', function (chunk) {
    appendedChunks.push(chunk)
    str = appendedChunks.join('')
  })

  response.on('end', function () {
    console.log(str.length)
    console.log(str)
  })
})
