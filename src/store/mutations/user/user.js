
import func from '@/plugins/function';

export default {
  setUser (state, {email, name, data, token, claims, then}) {
    state.user.email = email;
    state.user.name = name;
    state.user.data = data;
    state.user.token = token;
    state.user.claims = claims;
    state.user.loaded = true;

    func.execFunc(then);
  }
}
  