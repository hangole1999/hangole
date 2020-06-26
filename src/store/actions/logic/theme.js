
import func from '@/plugins/function';

export default {
  // theme
  setTheme ({commit}, {dark, then, err, final}) {
    try {
      commit('setTheme', {dark, then});
    } catch (error) {
      func.execFunc(err, error);
    }
    func.execFunc(final);
  }
};
