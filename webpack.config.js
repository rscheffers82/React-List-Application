const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const envFile = require('node-env-file');
// on heroku the environment var is set to production, on localhost it doesn't exist and thus is set to development
// to set the NODE_ENV var once run the following in the terminal
// NODE_ENV=production webpack
// add the -p flag to optimize the bundle.js file  --- NODE_ENV=production webpack -p
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
  // try loading in the environment config file
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch (e) {
  // when no config file exists (prod), do nothing
}

module.exports = {
  // context: path.resolve(__dirname, 'app'),
  entry: [
    'babel-polyfill',
    './node_modules/jquery/dist/jquery.min.js',
    './app/app.jsx'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }, {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'],
    modules: [
      'node_modules',
      './app/components',
      './app/api',
    ],
    alias: {
      app: path.resolve(__dirname, 'app'),
      applicationStyles: path.resolve(__dirname, 'app/styles/app.scss'),
      actions: path.resolve(__dirname, 'app/actions/actions.jsx'),
      reducers: path.resolve(__dirname, 'app/reducers/reducers.jsx'),
      configureStore: path.resolve(__dirname, 'app/store/configureStore.jsx'),
    }
  },
  plugins: [
    // new CleanWebpackPlugin(['public']);
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
        MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID)
      }
    })


  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: false,
    port: 3000,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'inline-source-map'

};

  // externals: {
  //   jquery: 'jQuery'
  // },
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     '$': 'jquery',
  //     'jQuery': 'jquery'
  //   }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     warnings: false
    //   }
    // }),
  // ],
 


 
