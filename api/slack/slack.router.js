'use strict';

const router = require('koa-router')();
const handlers = require('./slack.handlers');
const cache = require('../middleware/cache');

router.get('/slack', cache.setCache, handlers.getReviews);

module.exports = router;