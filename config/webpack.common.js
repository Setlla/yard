const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: { 
	alias: {
    	'Vue': 'vue/dist/vue.js'
	}
  },
  module: {
  	loaders: [
	  	{  
	      test: /\.vue$/,   
	      exclude: /node_modules/,  
	      loader: 'vue-loader'  
	    },
			{
				test: /\.(png|svg|jpg|gif|jpeg)$/,
				loader: 'url-loader?limit=8192',
				options: {
				    name: '[path][name].[ext]'
				  }
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
			},
			{
				test: /\.js$/,
			    loader: 'babel-loader',
			    exclude: /node_modules/,
			    query:{
			        presets: ['es2015'],  
			        plugins: ['transform-runtime']                      
			    }
			},
			{
				test: /\.html$/,
				loader: 'html-withimg-loader' //html中img的图片路径处理
			}
  	]
  },
  plugins: [
  	new CleanWebpackPlugin(['../dist']),
  	new HtmlWebpackPlugin({
  		template: "./index.html"
  	})
  ],
 }