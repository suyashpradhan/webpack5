/** @format */

const path = require('fs');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'main.js',
	},
	mode: 'production',
};
