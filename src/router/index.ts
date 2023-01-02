import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'menu',
    component: () => import('@/views/menu/index.vue'),
  },
  {
    path: '/inputNumber',
    name: 'inputNumber',
    component: () => import('@/views/inputNumber/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
