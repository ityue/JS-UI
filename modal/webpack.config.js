const path = require('path');

module.exports = {
  entry: './src/modal.js',
  output: {
    filename: 'modal.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'modal',
    libraryTarget: 'var',
  }
};