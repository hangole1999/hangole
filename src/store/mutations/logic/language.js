
export default {
  // language
  setLanguage (state, {language, then}) {
    state.language = language;

    if (typeof then === 'function') {
      then();
    }
  }
};
