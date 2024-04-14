import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
// import { useCommonStore } from '@/stores/index'
import SettingsPage from '@/pages/SettingsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        { path: '', component: () => import('@/pages/WelcomePage.vue'), name: 'welcome' },
        { path: 'main', component: () => import('@/pages/MainPage.vue'), name: 'main' }
        // { path: 'settings', component: () => import('@/pages/SettingsPage.vue'), name: 'settings' }
      ]
    },
    {
      path: '/settings',
      component: SettingsPage,
      name: 'settings'
    }
  ]
})

// router.beforeResolve(async () => {
//   console.log('beforeResolve')
// })
// router.beforeEach(async (to, __, next) => {
//   console.log('beforeEach')
//   const store = useCommonStore()
//   if (
//     to.name !== 'welcome' &&
//     store.weatherData &&
//     'location' in store.weatherData &&
//     'current' in store.weatherData &&
//     'forecast' in store.weatherData
//   ) {
//     next()
//   } else {
//     next({ name: 'welcome' })
//   }
// })

export default router
