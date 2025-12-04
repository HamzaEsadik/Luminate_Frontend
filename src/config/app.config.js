/**
 * Application Configuration
 * Centralized configuration for the entire application
 */

export const appConfig = {
  name: 'Luminate',
  version: '1.0.0',
  api: {
    baseURL: process.env.VUE_APP_API_BASE_URL || 'http://localhost:8000/api',
    sanctumURL: process.env.VUE_APP_API_URL || 'http://localhost:8000',
    timeout: 30000,
  },
  auth: {
    tokenKey: 'token',
    tokenPrefix: 'Bearer',
  },
  routes: {
    defaultAuth: '/dashboard',
    defaultGuest: '/login',
    landing: '/',
  },
}

export default appConfig
