
import func from '@/plugins/function';

export default {
  async setUser ({commit}, {email, name, data, then, err, final}) {
    try {
      let token = '';
      let claims = {};

      if (typeof data === 'object') {
        if (!email) {
          email = data.email || '';
        }
        if (!name) {
          name = data.displayName || '';
        }

        if (typeof data.getIdToken === 'function') {
          token = await data.getIdToken(true);
        }
        if (typeof data.getIdTokenResult === 'function') {
          const tokenResult = await data.getIdTokenResult();

          claims = tokenResult.claims;
        }
      }

      commit('setUser', {email, name, data, token, claims, then});
    } catch (error) {
      func.execFunc(err, error);
    }
    func.execFunc(final);
  },
  resetUser ({commit}, {then, err, final}) {
    try {
      commit('setUser', {email: '', name: '', data: null, then});
    } catch (error) {
      func.execFunc(err, error);
    }
    func.execFunc(final);
  }
}
  