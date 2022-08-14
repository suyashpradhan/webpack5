/** @format */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'main.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['css-loader', 'style-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html', inject: 'body', title: 'Webpack App' }),
	],
	mode: 'production',
};
