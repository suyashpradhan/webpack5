/** @format */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

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
			{
				test: /\.js$/i,
				exclude: '/node_modules/',
				use: ['babel-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html', inject: 'body', title: 'Webpack App' }),
	],
	mode,
	devtool: 'source-map',
};
