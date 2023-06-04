import { createApp } from 'vue'
import App from './App.vue'
import pinia from './pinia'
import { createRouter } from './router'

createApp(App).use(pinia).use(createRouter("history")).mount('#app')
