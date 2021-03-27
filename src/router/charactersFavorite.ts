import { RouteConfig } from 'vue-router';

import store from '@/store/store';
import { getFavorites } from '@/utils';
import CharacterFavoriteList from '@/views/character/FavoriteList.vue';

export const charactersFavoriteRoute: RouteConfig = {
  path: 'favorites',
  component: CharacterFavoriteList,
  name: 'charactersFavorite',
  props: {
    tabs: [
      { name: 'All Characters', routeName: 'characters' },
      { name: 'Favorites', routeName: 'charactersFavorite' }
    ]
  },
  beforeEnter: (to: any, from: any, next: any) => {
    store.commit('favoriteCharacter/setIds', getFavorites());
    next();
  }
};
