
import Vue from 'vue';

const config = {
  languages: [
    {
      title: 'English',
      id: 'en'
    },
    {
      title: 'Korean',
      id: 'ko'
    }
  ]
};

Vue.prototype.$config = config;

export default config;
