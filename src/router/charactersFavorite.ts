import { RouteConfig } from 'vue-router';

import CharacterFavoriteList from '@/views/character/FavoriteList.vue';

export const charactersFavoriteRoute: RouteConfig = {
  path: 'favorite',
  component: CharacterFavoriteList,
  name: 'charactersFavorite',
  props: {
    tabs: [
      { name: 'All Characters', routeName: 'characters' },
      { name: 'Favorites', routeName: 'charactersFavorite' }
    ]
  }
};
