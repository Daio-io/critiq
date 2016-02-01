'use strict';

const router = require('koa-router')();
const handlers = require('./ios.handlers');
const params = require('../middleware/params');
const cache = require('../middleware/cache');

router.get('/ios', params.validateiOSParams, cache.setCache, handlers.getReviews);

module.exports = router;