
import func from '@/plugins/function';

export default {
  setSnackbarShow (state, {show, then}) {
    state.ui.snackbar.show = show;

    func.execFunc(then);
  },
  addSnackbar (state, {message, mode, color, then}) {
    state.ui.snackbar.list.push({
      id: state.ui.snackbar.id++,
      mode: mode || '',
      color: color || 'info',
      message: message
    });

    func.execFunc(then);
  },
  removeSnackbar (state, {id, then}) {
    let index = state.ui.snackbar.list.findIndex((snackbar) => snackbar.id === id);
    
    if (index >= 0, index < state.ui.snackbar.list.length) {
      state.ui.snackbar.list.splice(index, 1);
    }

    func.execFunc(then);
  }
};
