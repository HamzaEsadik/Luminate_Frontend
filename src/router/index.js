import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
    meta: { Landing: true }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: { requiresAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach(function (to, from, next) {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem("token");
    if (!token) {
      next('/login')
    } else {
      next();
    }
  } else if(to.matched.some(record => record.meta.Landing)) {
    next();
  } else {
    const token = localStorage.getItem("token");
    if(token) {
      next('/dashboard');
    } else {
      next();
    }
  }
})

export default router

/*
if (!store.state.token) {
    console.log('token: null');
    next('/false')
  } else {
    console.log('token: success');
    next();
  }
*/
