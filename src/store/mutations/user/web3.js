
export default {
  // web3
  syncWeb3 (state, {web3Instance, then}) {
    state.metamask.web3.web3Instance = web3Instance;
    state.metamask.web3.isInjected = true;
    state.metamask.using = true;

    this.dispatch('storeMetamask', {});

    if (typeof then === 'function') {
      then();
    }
  },
  syncCoinbase (state, {coinbase, then}) {
    state.metamask.web3.coinbase = coinbase;

    if (typeof then === 'function') {
      then();
    }
  },
  syncNetworkID (state, {networkID, then}) {
    state.metamask.web3.networkID = networkID;

    if (typeof then === 'function') {
      then();
    }
  },
  syncBalance (state, {balance, then}) {
    state.metamask.web3.balance = parseInt(balance, 10);

    if (typeof then === 'function') {
      then();
    }
  }
}
  