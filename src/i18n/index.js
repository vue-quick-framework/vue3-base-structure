import store from '../store'
import { createI18n } from 'vue-i18n'
import zh_CN from './zh_CN'
import en_US from './en_US'

const i18n = createI18n({
  locale: store.state.storage.language, // set locale
  fallbackLocale: 'en', // set fallback locale
  messages: {
    zh_CN,
    en_US
  }, // set locale messages
})

export default i18n