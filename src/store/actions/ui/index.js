
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
  addSnackbar ({commit, state}, {message, vertical, color, then, err, final}) {
    try {
      commit('addSnackbar', {snackbar: {
        id: state.ui.snackbar.id++,
        vertical: vertical || false,
        color: color || 'info',
        message: message
      }, then});
    } catch (error) {
      func.execFunc(err, error);
    }
    func.execFunc(final);
  },
  removeSnackbar ({commit, getters}, {id, then, err, final}) {
    try {
      let index = getters.ui.snackbar.list.findIndex((snackbar) => snackbar.id === id);
      
      if (index >= 0, index < getters.ui.snackbar.list.length) {
        commit('removeSnackbar', {index, then});
      }
    } catch (error) {
      func.execFunc(err, error);
    }
    func.execFunc(final);
  }
};
