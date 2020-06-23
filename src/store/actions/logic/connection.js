
import func from '@/plugins/function';

export default {
  setConnectionCount ({commit}, {connectionCount, then, err, final}) {
    try {
      commit('setConnectionCount', {connectionCount, then});
    } catch (error) {
      func.execFunc(err, error);
    }
    func.execFunc(final);
  },
  connect ({commit}, {then, err, final}) {
    try {
      commit('connect', {then});
    } catch (error) {
      func.execFunc(err, error);
    }
    func.execFunc(final);
  }
};
