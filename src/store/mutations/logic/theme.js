
import func from '@/plugins/function';

export default {
  // theme
  setTheme (state, {dark, then}) {
    let beforeDark = state.theme.dark;

    state.theme.dark = dark;

    if (beforeDark !== dark) {
      this.commit('storeTheme', {});
    }

    func.execFunc(then);
  },

  storeTheme (state, {then}) {
    func.storageEach((storage) => storage.setItem('theme', JSON.stringify(state.theme))).then(then);
  }
};
