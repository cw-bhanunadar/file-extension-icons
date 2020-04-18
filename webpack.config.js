var path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use:{
        loader: "babel-loader"
      },
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: "html-loader"
        }
      ]
    }]
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js'
  }
};