'use strict'
const utils = require('./utils')
const config = require('../config')
const px2rem=require('postcss-px2rem')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction ?
  config.build.productionSourceMap :
  config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  postcss: {
    // options here will be passed to postcss-loader
    plugins: [px2rem({remUnit: 75 })]//1rem=多少像素 这里的设计稿是750px。
  }
}
