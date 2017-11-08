const lang = require('./say-number-i18n'); 

describe('SayNumber in en-US', () => {
  var enUS;

  beforeEach(() => {
    enUS = lang('en-US');
  });

  it('has utterances', () => {
    expect(enUS.utterances).toEqual([
      'say the number {-|number}',
    ]);
  });
});

describe('SayNumber in ja-JP', () => {
  var jaJP;

  beforeEach(() => {
    jaJP = lang('ja-JP');
  });

  it('has utterances', () => {
    expect(jaJP.utterances).toEqual([
      '数字の {-|number} を言って',
    ]);
  });

  it('responds', () => {
    const res = {
      say: jest.fn(),
    };
    const num = 3;
    jaJP.respond(res, num);
    expect(res.say).toHaveBeenCalledWith(`${num}って言いましたね`);
  });
});
