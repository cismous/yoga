/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const DIST_PATH = isDev ? __dirname + '/dist' : __dirname + '/dist/test'
const PUBLIC_PATH = isDev ? '/' : '/test/'

module.exports = {
  entry: './src/index.tsx',

  output: {
    filename: '[name].[hash].js',
    publicPath: PUBLIC_PATH,
    path: DIST_PATH,
  },

  plugins: [
    new HtmlPlugin({
      template: './public/index.html',
      filename: '../index.html',
      BASE_URL: isDev ? '/test' : '/',
    }),
    new CopyPlugin([
      {
        from: __dirname + '/node_modules/animate.css/animate.min.css',
        to: DIST_PATH + '/animate.min.css',
        toType: 'file',
      },
    ]),
  ],

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  devServer: {
    contentBase: path.join(DIST_PATH),
    historyApiFallback: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    hot: true,
    open: true,
    proxy: {
      '/api/web': {
        target: 'http://127.0.0.1:5555',
      },
    },
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'source-map-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64:5]',
              camelCase: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
      },
    ],
  },
}
