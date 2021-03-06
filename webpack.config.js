var webpack = require('webpack');
var path		= require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack/hot/only-dev-server',
		'./src/components/app.js'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		modulesDirectories: ['node_modules', 'src'],
		extensions: ['', '.js', '.jsx'],
		alias: { 'react/lib/ReactMount': 'react-dom/lib/ReactMount' }
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};