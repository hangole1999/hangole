
import func from '@/plugins/function';

export default {
  // language
  setLanguage ({commit}, {language, then, err, final}) {
    try {
      commit('setLanguage', {language, then});
    } catch (error) {
      func.execFunc(err, error);
    }
    func.execFunc(final);
  }
};
