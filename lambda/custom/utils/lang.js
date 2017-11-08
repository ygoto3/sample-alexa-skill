const env = require('../config/environment');

const supportedLangs = [
  'en-US',
  'ja-JP',
];

module.exports = {
  i18n(langs) {
    return (locale = env.APP_LOCALE) => {
      if (!~supportedLangs.indexOf(locale)) {
        locale = env.APP_LOCALE;
      }
      return langs[locale];
    };
  },
};
