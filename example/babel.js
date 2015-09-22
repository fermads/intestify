var intestify = require('../src')

intestify({
  src: 'src/Babel.js',
  spec: 'test/spec/BabelSpec.js',
  phantom: {
    params: {
      'load-images': false
    }
  }
})