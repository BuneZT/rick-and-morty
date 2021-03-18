import { RouteConfig } from 'vue-router';

import characterList from '@/views/character/List.vue';

export const charactersRoute: RouteConfig = {
  path: '',
  component: characterList,
  name: 'characters',
  meta: {
    breadcrumb: {
      title: 'Postacie'
    }
  }
};
