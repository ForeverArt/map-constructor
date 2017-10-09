var path = require('path');

var config = {
  entry: {
    main: [
      path.resolve(__dirname, 'src/index.js')
    ]
  }
  output: {
    publicPath: 'http://locahost:8080/'
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        exclude: /node_modules/,
        test: /\.jsx?$/,
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.scss?$/,
        loader: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};

module.exports = config;
