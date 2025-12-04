/**
 * Main Application Entry Point
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'

const app = createApp(App)

// Use plugins
app.use(store)
app.use(router)

// Global error handler
app.config.errorHandler = (err, instance, info) => {
  console.error('Global error:', err)
  console.error('Error info:', info)
  // You can send to error tracking service here (e.g., Sentry)
}

// Mount app
app.mount('#app')
