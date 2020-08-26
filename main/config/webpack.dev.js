const paths = require('./paths');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	devServer: {
		contentBase: paths.appDist,
		compress: true,
		port: 9000,
		historyApiFallback: true,
		open: true,
		hot: true,
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
});
