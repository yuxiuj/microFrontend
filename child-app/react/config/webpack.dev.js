const paths = require('./paths');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'none',
	devServer: {
		host: '0.0.0.0',
		contentBase: paths.appDist,
		compress: true,
		port: 3333,
		historyApiFallback: true,
		open: true,
		hot: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
});
