import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, LoginView, Dashboard} from '@/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: ()=> import('../layouts/Main.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
  ]
})

export default router
