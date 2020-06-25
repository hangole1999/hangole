
import func from '@/plugins/function';

export default {
  // web3
  syncWeb3 (state, {web3Instance, then}) {
    state.metamask.web3.web3Instance = web3Instance;
    state.metamask.web3.isInjected = true;
    state.metamask.using = true;

    this.dispatch('storeMetamask', {});

    func.execFunc(then);
  },
  syncCoinbase (state, {coinbase, then}) {
    state.metamask.web3.coinbase = coinbase;

    func.execFunc(then);
  },
  syncNetworkType (state, {networkType, then}) {
    state.metamask.web3.networkType = networkType;

    func.execFunc(then);
  },
  syncBalance (state, {balance, then}) {
    state.metamask.web3.balance = parseInt(balance, 10);

    func.execFunc(then);
  }
}
  