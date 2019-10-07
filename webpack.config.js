const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "src/app.js"),

  mode: "development",

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ template: path.join(__dirname, "index.html") }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'favorites.html',
      template: path.join(__dirname, "favorites.html")
    })
  ]
};
