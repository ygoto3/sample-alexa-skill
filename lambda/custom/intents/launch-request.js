const lang = require('./launch-request-i18n');

module.exports = function (req, res) {
  lang(req.data.request.locale)
    .respond(res)
    .shouldEndSession(false);
};
