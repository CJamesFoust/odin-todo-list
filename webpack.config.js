const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/index.html", "./src/styles.css"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      header: path.resolve(__dirname, "src/components/header"),
      main: path.resolve(__dirname, "src/components/main"),
      AddTask: path.resolve(__dirname, "src/components/main/AddTask"),
      Sidebar: path.resolve(__dirname, "src/components/main/Sidebar"),
      Content: path.resolve(__dirname, "src/components/main/Content"),
      FullScreenModal: path.resolve(
        __dirname,
        "src/components/FullScreenModal"
      ),
      Lists: path.resolve(__dirname, "src/components/main/Lists"),
    },
  },
};
