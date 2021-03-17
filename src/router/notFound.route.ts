import { RouteConfig } from 'vue-router';

import PageNotFound from '@/views/PageNotFound.vue';

export const notFoundRoute: RouteConfig = { path: '*', component: PageNotFound };
