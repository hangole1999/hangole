
import func from '@/plugins/function';

export default {
  setSnackbarShow ({commit}, {show, then, err, final}) {
    try {
      commit('setSnackbarShow', {show, then});
    } catch (error) {
      func.execFunc(err, error);
    }
    func.execFunc(final);
  },
  switchSnackbarShow ({commit, getters}, {then, err, final}) {
    try {
      commit('setSnackbarShow', {show: !getters.ui.snackbar.show, then});
    } catch (error) {
      func.execFunc(err, error);
    }
    func.execFunc(final);
  },
  addSnackbar ({commit}, {message, mode, color, then, err, final}) {
    try {
      commit('addSnackbar', {message, mode, color, then});
    } catch (error) {
      func.execFunc(err, error);
    }
    func.execFunc(final);
  },
  removeSnackbar ({commit}, {id, then, err, final}) {
    try {
      commit('removeSnackbar', {id, then});
    } catch (error) {
      func.execFunc(err, error);
    }
    func.execFunc(final);
  }
};
