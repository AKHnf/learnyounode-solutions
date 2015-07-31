var http = require('http')

var urlArr = process.argv.slice(2)
var count = 0
var completeDataSet = []

var collectData = function (element, index, array) {

  http.get(urlArr[index], function (response) {

    response.setEncoding('utf8')

    var str = ''
    count++

    response.on('data', function (chunk) {
      str += chunk
    })

    response.on('end', function () {
      count--
      completeDataSet[index] = str
      if (count === 0) {
        logData()
      }
    })
  })
}

var logData = function () {
  for (var i = 0; i < completeDataSet.length; i++) {
    console.log(completeDataSet[i])
  }
}

urlArr.forEach(collectData)
