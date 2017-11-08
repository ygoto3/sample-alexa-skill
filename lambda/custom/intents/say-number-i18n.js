const { i18n } = require('../utils/lang');

module.exports = i18n({
  'en-US': {
    utterances: [
      'say the number {-|number}',
    ],
    respond(res, num) {
      return res.say(`You said ${num}`);
    },
  },
  'ja-JP': {
    utterances: [
      '数字の {-|number} を言って',
    ],
    respond(res, num) {
      return res.say(`${num}って言いましたね`);
    },
  }
});
