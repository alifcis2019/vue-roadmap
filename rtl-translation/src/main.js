import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import en from './lang/en/en.json'
import ar from '@/lang/ar/ar.json'
// Create an i18n instance
const i18n = createI18n({
  locale: 'ar', // Default locale
  fallbackLocale: 'en', // Fallback locale
  messages: {
    en,
    ar,
  },
});
const app = createApp(App)
app.use(i18n);
app.use(createPinia())
app.use(router)
app.mount('#app')
