import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const localeList = [];
const messages = {};
const locales = require.context('./../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);

locales.keys().forEach(key => {
  const matched = key.match(/([A-Za-z0-9-_]+)\./i);
  if (matched && matched.length > 1) {
    const locale = matched[1];
    localeList.push(locale);
    messages[locale] = locales(key);
  }
});

Vue.prototype.$locales = localeList;

let browserLanguage = navigator.language || navigator.userLanguage;
let storedLanguage = '';

if (browserLanguage !== 'ko') {
  browserLanguage = '';
}

let storage;
try {
  storage = window['localStorage'];
  let x = '__storage_test__';
  storage.setItem(x, x);
  storage.removeItem(x);

  storedLanguage = storage.getItem('language');

  if (storedLanguage !== 'ko') {
    storedLanguage = '';
  }
} catch (err) {
  window.console.log(err);
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || storedLanguage || browserLanguage || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: messages
});
