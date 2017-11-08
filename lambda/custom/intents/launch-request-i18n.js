const Speech = require('ssml-builder');

const { i18n } = require('../utils/lang');

module.exports = i18n({
  'en-US': {
    respond(res) {
      const prompt = new Speech()
        .say('Tell me to say any number you like.')
        .pause('500ms')
        .say('For example, say the number 3.')
        .ssml(true);

      return res
        .say(prompt)
        .reprompt(prompt);
    },
  },
  'ja-JP': {
    respond(res) {
      const prompt = new Speech()
        .say('好きな数字を言ってください。')
        .pause('500ms')
        .say('例えば、数字の3を言って、と言ってください。')
        .ssml(true);

      return res
        .say(prompt)
        .reprompt(prompt);
    },
  }
});


