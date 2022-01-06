import { createApp } from 'vue'
import App from './App.vue'
import microApp from '@micro-zoe/micro-app'
import router from './router/index'

microApp.start()
const app = createApp(App)
app.use(router)
app.mount('#app')
