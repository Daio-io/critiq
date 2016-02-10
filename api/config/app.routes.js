'use struct';

const iosRouter = require('../ios/ios.router');
const slackRouter = require('../slack/slack.router');

module.exports = function(app) {

  app.use(iosRouter.routes());
  app.use(slackRouter.routes());

};