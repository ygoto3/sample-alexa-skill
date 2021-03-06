const Speech = require('ssml-builder');

const lang = require('./launch-request-i18n');

describe('SayNumber in ja-JP', () => {
  var jaJP;

  beforeEach(() => {
    jaJP = lang('ja-JP');
  });

  it('responds', () => {
    const res = {
      say: jest.fn(() => res),
      reprompt: jest.fn(() => res),
    };
    const expected = new Speech()
      .say('好きな数字を言ってください。')
      .pause('500ms')
      .say('例えば、数字の3を言って、と言ってください。')
      .ssml(true);

    jaJP.respond(res);
    expect(res.say).toHaveBeenCalledWith(expected);
    expect(res.reprompt).toHaveBeenCalledWith(expected);
  });
});
