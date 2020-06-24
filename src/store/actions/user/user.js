
import func from '@/plugins/function';

export default {
  setUser ({commit}, {email, name, token, data, then, err, final}) {
    try {
      commit('setUser', {email, name, token, data, then});
    } catch (error) {
      func.execFunc(err, error);
    }
    func.execFunc(final);
  },
  resetUser ({commit}, {then, err, final}) {
    try {
      commit('setUser', {email: '', name: '', token: '', data: null, then});
    } catch (error) {
      func.execFunc(err, error);
    }
    func.execFunc(final);
  },
  storeUser ({commit}, {then, err, final}) {
    try {
      commit('storeUser', {then});
    } catch (error) {
      func.execFunc(err, error);
    }
    func.execFunc(final);
  }
}
  