import { RouteConfig } from 'vue-router';

import { applicationsRoute } from './applications.route';
import RouterView from '@/components/layout/RouterView.vue';

export const applicationContainerRoute: RouteConfig = {
  path: 'applications',
  component: RouterView,
  children: [applicationsRoute]
};
