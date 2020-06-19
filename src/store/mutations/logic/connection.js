
export default {
  setConnectionCount (state, {connectionCount, then}) {
    state.connectionCount = connectionCount;

    let storage;
    try {
      storage = window['localStorage'];
      let x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);

      storage.setItem('connectionCount', state.connectionCount);

      if (typeof then === 'function') {
        then();
      }
    } catch (err) {
      window.console.log(err);
      window.console.log(
        err instanceof DOMException,
        (
          err.code === 22 ||
          err.code === 1014 ||
          err.name === 'QuotaExceededError' ||
          err.name === 'NS_ERROR_DOM_QUOTA_REACHED'
        ) && (
          storage && storage.length !== 0
        )
      );
    }
  },
  connect (state, {then}) {
    state.connectionCount++;
    this.dispatch('setConnectionCount', {connectionCount: state.connectionCount});

    if (typeof then === 'function') {
      then();
    }
  }
};
