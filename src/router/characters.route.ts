import { RouteConfig } from 'vue-router';

import CharacterList from '@/views/character/List.vue';

export const charactersRoute: RouteConfig = {
  path: '',
  component: CharacterList,
  name: 'characters',
  props: {
    tabs: [
      { name: 'All Characters', routeName: 'characters' },
      { name: 'Favorites', routeName: 'charactersFavourite' }
    ]
  }
};
