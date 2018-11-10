const path = require('path');

module.exports = {
  entry: './src/toast.js',
  output: {
    filename: 'toast.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'toast',
    libraryTarget: 'var',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};