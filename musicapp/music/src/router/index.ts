import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Manage from '@/views/Manage.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },

  {
    name: 'about',
    path: '/about',
    component: About
  },

  {
    name: 'manage',
    path: '/manage-music',
    component: Manage,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/manage',
    redirect: { name: 'manage' }
  },

  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-red-700'
})

/*
 * Hear we can write global guards(such as guards on restricted
 * resources for like premium users)
 */
// router.beforeEach((to, from, next)) {
// }

export default router
