const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
	mode: 'production',
	devtool: 'none',
	performance: {
		hints: false,
	},
	plugins: [
		new webpack.HashedModuleIdsPlugin(),
		new TerserJSPlugin({
			sourceMap: true,
			cache: true,
		}),
		new OptimizeCSSAssetsPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:5].css',
			chunkFilename: 'css/[name].[contenthash:5].chunk.css',
		}),
	],
});
