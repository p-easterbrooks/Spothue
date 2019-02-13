const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  mode: 'none',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 's.js'
  },
  node: {
    dgram: 'empty'
  }
};
