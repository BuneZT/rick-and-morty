import Vue from 'vue';
import Router, { RouterOptions } from 'vue-router';

import { mainRoute } from './router/main.route';
import { notFoundRoute } from './router/notFound.route';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [mainRoute, notFoundRoute],
} as RouterOptions);

export default router;
