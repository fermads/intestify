var fs = require('fs')
var babel = require('babel-core')
var mkdirp = require('mkdirp')

var utility = require('./utility')

function transformFiles(files, dir, filename, callback) {
  var count = files.length, specs = []

  if(!utility.isDirectory(dir))
    mkdirp(dir)

  files.forEach(function(file, index) {
    try {
      specs[index] = babel.transformFileSync(file).code
    }
    catch(e) {
      console.error('Unable to transpile', file)
      return callback(e)
    }

    if(--count === 0) {
      fs.writeFile(dir +'/'+ filename, specs.join(';'), callback)
    }
  })
}

module.exports = {
  transformFiles: transformFiles
}