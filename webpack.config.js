const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { EsbuildPlugin } = require("esbuild-loader");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    // publicPath: "http://localhost:3002/",
    publicPath: "auto",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json", ".css", ".scss"],
    alias: {
      images: path.resolve(__dirname, "public/images"),
      react: path.resolve("./node_modules/react"),
      "tailwind-config": path.resolve(__dirname, "../main-mf/tailwind.config.js"),
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: false,
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
      name: "tables",
      filename: "remoteEntry.js",
      remotes: {
        main: `main@${process.env.REACT_APP_HOST_URL}/remoteEntry.js`,
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: "^19.0.0" },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: "^19.0.0",
        },
        zustand: { singleton: true, requiredVersion: "^5.0.0" },
      },
      exposes: {
        "./TablesApp": "./src/components/Tables",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "Restaurant Demo App | Tables",
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    historyApiFallback: true,
    port: 3002,
    hot: true,
    liveReload: true,
    client: {
      overlay: true,
      webSocketURL: "ws://localhost:3002/ws",
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
    },
  },
};
