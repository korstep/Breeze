import { createRouter, createWebHistory } from 'vue-router'
import { routeNames } from '@/router/constants/routeNames'
import AppLayout from '@/layouts/AppLayout.vue'
import { useSharedStore } from '@/shared/store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        { path: '/', component: () => import('@/pages/WelcomePage.vue'), name: routeNames.welcome },
        {
          path: '/main',
          component: () => import('@/pages/MainPage.vue'),
          name: routeNames.main,
          meta: { requiresWeatherData: true }
        },
        { path: '/cities', component: () => import('@/pages/CitiesPage.vue'), name: routeNames.cities },
        { path: '/settings', component: () => import('@/pages/SettingsPage.vue'), name: routeNames.settings }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresWeatherData = to.matched.some((record) => record.meta.requiresWeatherData)
  const { isWeatherDataValid } = useSharedStore()
  if (requiresWeatherData && !isWeatherDataValid) {
    next({ name: routeNames.welcome })
  }

  next()
})
export default router
