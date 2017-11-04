const Speech = require('ssml-builder');

module.exports = function (req, res) {
  const speech = new Speech();
  const prompt = new Speech()
    .say('Tell me to say any number you like.')
    .pause('500ms')
    .say('For example, say the number 3.')
    .ssml(true);

  res
    .say(prompt)
    .reprompt(prompt)
    .shouldEndSession(false);
};
