
import func from '@/plugins/function';

export default {
  setSnackbarShow (state, {show, then}) {
    state.ui.snackbar.show = show;

    func.execFunc(then);
  },
  addSnackbar (state, {snackbar, then}) {
    state.ui.snackbar.list.push(snackbar);

    func.execFunc(then);
  },
  removeSnackbar (state, {index, then}) {
    state.ui.snackbar.list.splice(index, 1);

    func.execFunc(then);
  }
};
