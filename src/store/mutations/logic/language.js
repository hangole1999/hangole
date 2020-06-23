
import func from '@/plugins/function';

export default {
  // language
  setLanguage (state, {language, then}) {
    state.language = language;

    func.execFunc(then);
  }
};
