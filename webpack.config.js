const path = require('node:path')
const nodeExternals = require('webpack-node-externals')

module.exports = argv => {
	return {
		entry: './src/index.ts',
		target: 'node',
		externals: [nodeExternals()],
		module: {
			rules: [
				{
					test: /\.ts$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
			],
		},
		resolve: {
			extensions: ['.ts', '.js'],
		},
		output: {
			filename: 'main.js',
			path: path.resolve(__dirname, 'dist'),
		},
		mode: argv.mode || 'development',
		watch: argv.mode === 'development',
	}
}
