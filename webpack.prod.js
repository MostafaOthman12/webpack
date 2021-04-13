const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const { GenerateSW } = require('workbox-webpack-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');

module.exports = {
	mode: 'production',
	entry: ['@babel/polyfill', './src/client/index.js'],
	output: {
		libraryTarget: 'var',
		library: 'Client',
	},
	optimization: {
		minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/client/views/index.html',
			filename: 'index.html',
		}),
		new MiniCssExtractPlugin({ filename: '[name].css' }),
		new GenerateSW(),
		new DotenvWebpackPlugin(),
	],
};
