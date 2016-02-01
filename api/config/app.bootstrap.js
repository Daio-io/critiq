'use strict';

const Scrapper = require('../lib/ios.scrapper');
const httpClient = require('../lib/reviewHttpClient');
const config = require('./app.config');

module.exports = function(app) {

  app.context.scrapper = new Scrapper(config.IOS_URL, httpClient);

};