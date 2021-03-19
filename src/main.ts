import '@babel/polyfill';
import Vue from 'vue';
import vueMoment from 'vue-moment';

import '@mdi/font/css/materialdesignicons.css';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import pl from 'vuetify/src/locale/pl';
import App from './App.vue';
import './plugins/vuetify';
import router from './router';
import store from './store/store';

Vue.use(vueMoment as any);
Vue.config.productionTip = false;
export const eventBus = new Vue();
new Vue({
  router,
  store,
  vuetify: new Vuetify({
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#11B0C8',
          secondary: '#4caf50',
          tertiary: '#495057',
          accent: '#82B1FF',
          error: '#f55a4e',
          info: '#00d3ee',
          success: '#5cb860',
          warning: '#ffa21a'
        }
      }
    },
    icons: {
      iconfont: 'mdi'
    }
  }),
  render: h => h(App)
}).$mount('#app');
