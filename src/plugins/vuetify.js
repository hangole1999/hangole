import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      dark: {
        primary: '#1976D2',
        secondary: '#424242',
        tertiary: colors.pink.base,
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        tertiary: colors.pink.base,
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      }
    }
  }
});

export default vuetify;
