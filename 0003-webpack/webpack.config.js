const path = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, 'index.jsx'),
  },
  output: {
    path: __dirname,
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ["es2015", "stage-0", "react"],
        }
      },
    ]
  },
};
