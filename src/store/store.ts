import Vue from 'vue';
import Vuex from 'vuex';

import character from './modules/character.module';
import confirm from './modules/confirm.module';
import favoriteCharacter from './modules/favoriteCharacter.module';

Vue.use(Vuex);
// Create a new store

const store = new Vuex.Store({
  actions: {},
  getters: {},
  mutations: {},
  state: {},
  modules: { character, confirm, favoriteCharacter }
});

export default store;
