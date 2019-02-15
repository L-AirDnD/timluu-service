let path = require("path");

module.exports = {
  entry: "./client/index.jsx",
  output: {
    path: path.join(__dirname, 'public/dist/'),
    pathinfo: true,
    filename: "bundle.js"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [["@babel/preset-env", {modules: false}], "@babel/preset-react"],
          plugins: ["babel-plugin-styled-components"]
        }
      }
    ]
  },
  watch: true
}