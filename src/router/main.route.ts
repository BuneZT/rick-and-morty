import { RouteConfig } from 'vue-router';

import AppLayout from '@/AppLayout.vue';
import { characterContainerRoute } from './characterContainer';

export const mainRoute: RouteConfig = {
  path: '/',
  component: AppLayout,
  redirect: { name: 'characters' },
  children: [characterContainerRoute]
};
