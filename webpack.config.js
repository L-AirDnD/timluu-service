let path = require("path");

module.exports = {
  entry: "./client/index.jsx",
  output: {
    path: path.join(__dirname, 'public/dist/'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      }
    ]
  },
  watch: true
}