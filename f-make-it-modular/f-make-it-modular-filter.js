var fs = require('fs')
var path = require('path')

module.exports = function (dir, fileType, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }

    list = list.filter(function(file) {
      return path.extname(file) === '.'.concat(fileType)
    })

    callback(null, list)
  })
}
