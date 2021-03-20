import Vue from 'vue';
import Vuex from 'vuex';

import character from './modules/character.module';
import confirm from './modules/confirm.module';
import favoriteCharacter from './modules/favoriteCharacter.module';
import notification from './modules/notification.module';
import system from './modules/system.module';

Vue.use(Vuex);
// Create a new store

const store = new Vuex.Store({
  actions: {},
  getters: {},
  mutations: {},
  state: {},
  modules: { notification, system, character, confirm, favoriteCharacter }
});

export default store;
