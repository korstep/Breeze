import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import '@/assets/styles/base/main.scss'
import '@/assets/styles/base/variables.css'
import router from '@/router/index'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
