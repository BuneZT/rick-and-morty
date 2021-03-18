import Vue from 'vue';
import Vuex from 'vuex';

import notification from './modules/notification.module';
import system from './modules/system.module';
import character from './modules/character.module';
import confirm from './modules/confirm.module';

Vue.use(Vuex);
// Create a new store

const store = new Vuex.Store({
  actions: {},
  getters: {},
  mutations: {},
  state: {},
  modules: { notification, system, character, confirm }
});

export default store;
