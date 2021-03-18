import { RouteConfig } from 'vue-router';

import { charactersRoute } from './characters.route';
import RouterView from '@/components/layout/RouterView.vue';

export const characterContainerRoute: RouteConfig = {
  path: 'characters',
  component: RouterView,
  children: [charactersRoute]
};
