'use strict';

const Scrapper = require('../lib/ios.rss.scrapper');
const httpClient = require('../lib/reviewHttpClient');
const config = require('./app.config');

module.exports = function(app) {

  app.context.Scrapper = new Scrapper(config.IOS_URL, httpClient);
  app.context.cache = config.CACHE;

};