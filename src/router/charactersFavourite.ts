import { RouteConfig } from 'vue-router';

import CharacterFavoriteList from '@/views/character/FavoriteList.vue';

export const charactersFavouriteRoute: RouteConfig = {
  path: 'favourite',
  component: CharacterFavoriteList,
  name: 'charactersFavourite',
  props: {
    tabs: [
      { name: 'All Characters', routeName: 'characters' },
      { name: 'Favorites', routeName: 'charactersFavourite' }
    ]
  }
};
