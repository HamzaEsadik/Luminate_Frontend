/**
 * Application Constants
 * Centralized constants to avoid magic strings and numbers
 */

export const API_ENDPOINTS = {
  // Auth
  CSRF_COOKIE: '/sanctum/csrf-cookie',
  LOGIN: '/login',
  LOGOUT: '/logout',
  REGISTER: '/register',
  
  // User
  USER: '/users',
  
  // Projects
  PROJECTS: '/projects',
  
  // Meetings
  MEETINGS: '/meetings',
  
  // Tasks
  TASKS: '/tasks',
  
  // Team
  TEAM: '/team',
  INVITATIONS: '/invitations',
  ACCEPT_INVITATION: '/accept',
}

export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
}

export const ROUTE_NAMES = {
  LANDING: 'LandingPage',
  LOGIN: 'login',
  REGISTER: 'register',
  DASHBOARD: 'dashboard',
}

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
}

export const MODAL_TYPES = {
  CREATE_MEETING: 'create_meeting',
  CREATE_PROJECT: 'create_project',
  CREATE_TASK: 'create_task',
  ADD_TEAM: 'add_team',
}

export const VIEW_TYPES = {
  HOME: 'home',
  TEAM: 'team',
}
