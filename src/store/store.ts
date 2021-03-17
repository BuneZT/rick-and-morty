import Vue from 'vue';
import Vuex from 'vuex';

import notification from './modules/notification.module';
import system from './modules/system.module';
import confirm from './modules/confirm.module';
import application from './modules/application.module';

Vue.use(Vuex);
// Create a new store

const store = new Vuex.Store({
  actions: {},
  getters: {},
  mutations: {},
  state: {},
  modules: { notification, system, application, confirm }
});

export default store;
