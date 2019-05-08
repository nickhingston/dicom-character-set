const merge = require('./merge');
const baseConfig = require('./webpack-dev');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const prodConfig = {
  mode: "production",
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: true
      })
    ]
  },
};

baseConfig.forEach((config) => config.output.filename = config.output.filename.replace('.js', '.min.js'));

module.exports = merge(baseConfig, prodConfig);
