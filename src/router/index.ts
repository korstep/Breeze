import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        { path: '', component: () => import('@/pages/MainPage.vue') },
        { path: 'settings', component: () => import('@/pages/SettingsPage.vue') }
      ]
    }
  ]
})

export default router
