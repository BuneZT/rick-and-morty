import { RouteConfig } from 'vue-router';

import applicationList from '@/views/application/List.vue';

export const applicationsRoute: RouteConfig = {
  path: '',
  component: applicationList,
  name: 'applications',
  meta: {
    breadcrumb: {
      title: 'Charaktery'
    }
  }
};
