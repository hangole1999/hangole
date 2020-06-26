
import func from '@/plugins/function';

export default {
  // language
  setLanguage (state, {language, then}) {
    let beforeLanguage = state.language;

    state.language = language;

    if (beforeLanguage !== language) {
      this.commit('storeLanguage', {});
    }

    func.execFunc(then);
  },

  storeLanguage (state, {then}) {
    func.storageEach((storage) => storage.setItem('language', JSON.stringify(state.language))).then(then);
  }
};
