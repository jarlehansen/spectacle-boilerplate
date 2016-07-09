const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  devtool: 'source-map',
  entry: `${__dirname}/src/App.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: `${__dirname}/src/index.tmpl.html` })
  ],
  devServer: {
    contentBase: './dist',
    colors: true,
    historyApiFallback: true,
    inline: true
  },
  module: {
    loaders: [
      {
        test: /\.md$/,
        loader: 'html-loader!markdown-loader?gfm=false'
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react', 'es2015'
          ],
          env: {
            development: {
              plugins: [
                ['react-transform', {
                  transforms: [{
                    transform: 'react-transform-hmr',
                    imports: ['react'],
                    locals: ['module']
                  }]
                }]]
            }
          }
        }
      }, {
        test: /\.css$/,
        loaders: [
          'style', 'raw'
        ],
        include: __dirname
      }, {
        test: /\.svg$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
        include: `${__dirname}/assets`
      }, {
        test: /\.png$/,
        loader: 'url-loader?mimetype=image/png',
        include: `${__dirname}/assets`
      }, {
        test: /\.gif$/,
        loader: 'url-loader?mimetype=image/gif',
        include: `${__dirname}/assets`
      }, {
        test: /\.jpg$/,
        loader: 'url-loader?mimetype=image/jpg',
        include: `${__dirname}/assets`
      }
    ]
  }
};

module.exports = config;
