
import func from '@/plugins/function';

export default {
  setConnectionCount (state, {connectionCount, then}) {
    state.connectionCount = connectionCount;

    func.storageEach((storage) => storage.setItem('connectionCount', state.connectionCount)).then(then);
  },
  connect (state, {then}) {
    state.connectionCount++;
    this.dispatch('setConnectionCount', {connectionCount: state.connectionCount});

    func.execFunc(then);
  }
};
