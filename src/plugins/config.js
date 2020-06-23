
import Vue from 'vue';

const config = {
  host: {
    github: 'https://github.com/hangole1999/hangole'
  },
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
