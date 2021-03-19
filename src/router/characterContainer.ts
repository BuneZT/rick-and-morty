import { RouteConfig } from 'vue-router';

import RouterView from '@/components/layout/RouterView.vue';
import { charactersRoute } from './characters.route';
import { charactersFavouriteRoute } from './charactersFavourite';

export const characterContainerRoute: RouteConfig = {
  path: 'characters',
  component: RouterView,
  children: [charactersRoute, charactersFavouriteRoute]
};
