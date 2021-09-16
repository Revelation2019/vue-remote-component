const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    'button': './src/components/Button/index.vue',
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, './dist'),
    library: 'MyComponent',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: false
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      { 
        test: /\.(jpg|jpeg|png|gif)$/, 
        use: ['url-loader'] 
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['dist']
    }),
  ],
}