'use strict';

const router = require('koa-router')();
const handlers = require('./ios.handlers');
const middleware = require('../middleware/params');

router.get('/ios', middleware.validateiOSParams, handlers.getReviews);

module.exports = router;