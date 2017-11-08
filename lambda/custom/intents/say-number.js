const lang = require('./say-number-i18n.js');

module.exports = [
  'SayNumber',
  {
    slots: { number: 'AMAZON.NUMBER' },
    utterances: lang().utterances,
  },
  (req, res) => {
    const num = req.slot('number');
    lang(req.data.request.locale)
      .respond(res, num);
  }
];
