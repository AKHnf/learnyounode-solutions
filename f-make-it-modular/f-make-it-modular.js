var filterFn = require('./f-make-it-modular-filter.js')
var dir = process.argv[2]
var fileType = process.argv[3]

filterFn(dir, fileType, function (err, list) {
  if (err) {
    return console.error('Oops, looks like something\'s gone wrong! \n', err);
  }

  list.forEach(function (file) {
    console.log(file)
  })
})
