import { createApp } from 'vue'
import i18n from './i18n'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'

createApp(App).use(i18n).use(store).use(router).use(api).mount('#app')
