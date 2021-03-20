import { RouteConfig } from 'vue-router';

import store from '@/store/store';
import { getFavorites } from '@/utils';
import CharacterList from '@/views/character/List.vue';

export const charactersRoute: RouteConfig = {
  path: '',
  component: CharacterList,
  name: 'characters',
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
