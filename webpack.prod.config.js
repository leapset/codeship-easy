// Import components
const webpack = require('webpack')
const path = require('path')

// Create empty config
const config = {}

config.entry = [path.join(__dirname, '/app/index.js')]

config.output = {
  publicPath: '/dist',
  path: path.join(__dirname, '/dist'),
  filename: 'bundle.js'
}

config.module = {
  loaders: [
    {
      test: /\.(ttf|eot|woff)(\?.*)?$/,
      loaders: ['url']
    },
    {
      test: /\.svg(\?.*)?$/,
      loaders: ['url', 'svgo']
    },
    {
      test: /\.scss$/,
      loaders: ['style', 'css?modules', 'postcss', 'sass']
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel']
    },
    {
      test: /\.html$/,
      loader: 'html'
    },
    {
      test: /\.json$/,
      loader: 'json'
    }
  ]
}

config.postcss = function() {
  return [
    require('autoprefixer')
  ];
}

config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: {
      warnings: false
    }
  }),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
]

module.exports = config
