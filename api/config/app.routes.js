'use struct';

const iosRouter = require('../ios/ios.router');

module.exports = function(app) {

  app.use(iosRouter.routes())

};