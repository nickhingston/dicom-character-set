const path = require('path');
const rootPath = process.cwd();
const context = path.join(rootPath, "src");
const outputPath = path.join(rootPath, 'dist');
const bannerPlugin = require(path.join(__dirname, 'plugins', 'banner.js'));
const merge = require('./merge');

const webConfig = {
  target: 'web',
  output: {
    path: path.resolve(rootPath, "dist/web"),
    libraryTarget: 'umd'
  },
};

const nodeConfig = {
  target: 'node',
  output: {
    path: path.resolve(rootPath, "dist/node"),
    libraryTarget: 'commonjs2'
  },
};

const baseConfig = {
  mode: 'development',
  context: context,
  entry: {
    'dicom-character-set': './index.js'
  },
  output: {
    filename: '[name].js',
    library: 'dicom-character-set',
    globalObject: 'this',
    umdNamedDefine: false
  },
  devtool: 'source-map',
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      exclude: /(node_modules|test)/,
      loader: 'eslint-loader',
      options: {
        failOnError: false
      }
    },
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader'
      }]
    }]
  },
  plugins: [
    bannerPlugin()
  ]
};

module.exports = [merge(baseConfig, webConfig), merge(baseConfig, nodeConfig)];
