
import func from '@/plugins/function';

export default {
  setUser (state, {email, name, token, data, then}) {
    state.user.email = email;
    state.user.name = name;
    state.user.token = token;
    state.user.data = data;

    func.execFunc(then);
  },
  storeUser (state, {then}) {
    let storage;
    try {
      storage = window['localStorage'];
      let x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);

      storage.setItem('user', JSON.stringify({
        email: state.user.email,
        name: state.user.name,
        token: state.user.token
      }));
    } catch (err) {
      window.console.error('storeUser', err);
    }

    func.execFunc(then);
  }
}
  