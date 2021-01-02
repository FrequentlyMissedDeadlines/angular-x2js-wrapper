const webpack = require("webpack");
const path = require("path");
const glob = require("glob");

let config = {
  entry: {
    main: glob.sync('./src/angular-x2js-wrapper.js')
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './angular-x2js-wrapper.js'
  },

  mode: 'production'
}

module.exports = config;