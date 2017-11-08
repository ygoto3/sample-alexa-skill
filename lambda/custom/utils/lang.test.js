const { i18n } = require('./lang'); 

describe('i18n', () => {
  it('returns a value for each locale', () => {
    const lang = i18n({
      'en-US': {
        utterances: [
          'say the number {-|number}',
        ],
      },
      'ja-JP': {
        utterances: [
          '数字の{-|number}を言って',
        ],
      }
    });

    expect(lang('en-US').utterances).toEqual([
      'say the number {-|number}',
    ]);

    expect(lang('ja-JP').utterances).toEqual([
      '数字の{-|number}を言って',
    ]);
  });
});


