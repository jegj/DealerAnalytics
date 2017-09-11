var webpack = require('webpack'),
path = require('path'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
CopyWebpackPlugin = require('copy-webpack-plugin')
fs = require('fs');

/* babel */
// const babelSettings = JSON.parse(fs.readFileSync(".babelrc"));

const config = {
	entry:{
		app:'./src/main.js'
	},
	output:{
		path:path.resolve(__dirname,'build'),
		filename:'main.js'
	},
	resolve:{
		extensions:['.js']
	},
	devServer:{
		contentBase: path.resolve(__dirname, 'public'),
		host: '0.0.0.0',
		port: 9000,
		inline: true
	},
	module:{
		loaders:[]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
			hash: true,
			filename: 'index.html',
			inject: 'body'
		}),
		new CopyWebpackPlugin([
			{from : 'public'}
		])
	],
	devtool: "source-map"
};

module.exports = config;