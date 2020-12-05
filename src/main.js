import { createApp } from 'vue'
import i18n from './i18n'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'

import './assets/stylesheets/application.scss'

import { ElButton } from 'element-plus'
import validators from './utils/validators'

import SvgIcon from "@/components/SvgIcon";

const app = createApp(App).use(i18n).use(store).use(router).use(api)
app.config.globalProperties.$ELEMENT = { size: 'mini', zIndex: 2000 }
app.use(validators)
app.use(ElButton)
app.component('SvgIcon', SvgIcon)
app.mount('#app')
