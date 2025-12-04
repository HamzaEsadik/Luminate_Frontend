/**
 * Vue Router Configuration
 * Implements lazy loading and route guards
 */

import { createRouter, createWebHistory } from 'vue-router'
import { STORAGE_KEYS, ROUTE_NAMES } from '@/core/constants'

// Lazy load all route components for better code splitting
const routes = [
  {
    path: '/',
    name: ROUTE_NAMES.LANDING,
    component: () => import(/* webpackChunkName: "landing" */ '@/views/LandingPage.vue'),
    meta: { 
      requiresAuth: false,
      guestOnly: false,
    }
  },
  {
    path: '/login',
    name: ROUTE_NAMES.LOGIN,
    component: () => import(/* webpackChunkName: "auth" */ '@/views/LoginView.vue'),
    meta: { 
      requiresAuth: false,
      guestOnly: true,
    }
  },
  {
    path: '/register',
    name: ROUTE_NAMES.REGISTER,
    component: () => import(/* webpackChunkName: "auth" */ '@/views/RegisterView.vue'),
    meta: { 
      requiresAuth: false,
      guestOnly: true,
    }
  },
  {
    path: '/dashboard',
    name: ROUTE_NAMES.DASHBOARD,
    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/DashboardView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

/**
 * Navigation guard to handle authentication
 */
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem(STORAGE_KEYS.TOKEN)
  const isAuthenticated = !!token
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const guestOnly = to.matched.some(record => record.meta.guestOnly)

  // Redirect authenticated users away from guest-only pages
  if (guestOnly && isAuthenticated) {
    return next({ name: ROUTE_NAMES.DASHBOARD })
  }

  // Redirect unauthenticated users to login
  if (requiresAuth && !isAuthenticated) {
    return next({ name: ROUTE_NAMES.LOGIN })
  }

  next()
})

export default router
