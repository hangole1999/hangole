
export default {
  connectionCount: 0,
  language: '',
  user: {
    data: null,
    email: '',
    name: '',
    token: ''
  },
  metamask: {
    web3: {
      isInjected: false,
      web3Instance: null,
      networkType: null,
      coinbase: null,
      balance: null,
      error: null
    },
    using: false
  },
  ui: {
    snackbar: {
      id: 0,
      show: true,
      list: []
    }
  }
};
