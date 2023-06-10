import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'MainLayout',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'route',
        component: () => import('pages/RoutePage.vue'),
        children: [
          {
            path: '',
            name: 'RouteSelect',
            component: () => import('pages/route/RouteSelect.vue')
          },
          {
            path: 'add-route',
            name: 'AddRoutes',
            component: () => import('pages/route/AddRoute.vue')
          },
          {
            path: 'saved-route',
            name: 'SaveRoute',
            component: () => import('pages/route/SavedRoutes.vue')
          }
        ]
      },

      {
        path: 'auth',
        component: () => import('pages/AuthPage.vue'),
        children: [
          {
            path: '',
            name: 'Login',
            component: () => import('pages/auth/LoginSection.vue')
          },
          {
            path: 'register',
            name: 'Register',
            component: () => import('pages/auth/RegisterSection.vue')
          }
        ]
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
