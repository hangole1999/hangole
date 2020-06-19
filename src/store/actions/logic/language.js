
export default {
  // language
  setLanguage ({commit}, {language, then, err, final}) {
    try {
      commit('setLanguage', {language, then});
    } catch (error) {
      if (typeof err === 'function') {
        err(error);
      }
    }
    if (typeof final === 'function') {
      final();
    }
  }
};
