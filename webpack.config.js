const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const config = {
  entry: "./app/index.js",
  output: {
  	path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
    	{ test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
    	{ test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        bypass: function(req, res, proxyOptions) {
          if (req.headers.accept.indexOf("html") !== -1) {
            console.log("Skipping proxy for browser request.");
            return "/index.html";
          }
        }
      }
    }
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({template: './app/index.html'})
  ]
};

if (process.env.NODE_ENV === "production") {
  config.plugins.push(
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  );
}

module.exports = config;