import { RouteConfig } from 'vue-router';

import AppLayout from '@/AppLayout.vue';
import { applicationContainerRoute } from './applicationContainer.route';

export const mainRoute: RouteConfig = {
  path: '/',
  component: AppLayout,
  redirect: { name: 'applications' },
  children: [applicationContainerRoute]
};
