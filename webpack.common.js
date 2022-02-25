const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
	entry: "./src/index.tsx",
	output: {
		path: path.join(__dirname, "/build"),
		filename: "index.bundle.js",
	},
	mode: process.env.NODE_ENV || "development",
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	module: {
		rules: [
			                       {
                               test: /\.(js|jsx)$/,
                               exclude: /node_modules/,
                               use: ["babel-loader"],
                       },                       {
                               test: /\.(css|scss)$/,
                               use: ["style-loader", "css-loader"],
                       },
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ["ts-loader"],
			},
			{
				test: /\.md$/,
				use: "raw-loader",
			},
			{
				test: /\.(jpg|png|jpe?g|gif|jp2|webp)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "src", "index.html"),
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: "src/pages", to: "." },
				{ from: "src/img", to: "./airbit-page/img" }

			],
		}),
	],

};
