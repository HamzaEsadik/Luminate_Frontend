/**
 * Authentication Service
 * Handles all authentication-related API calls
 */

import axiosInstance from '@/core/api/axios.instance'
import axios from 'axios'
import appConfig from '@/config/app.config'
import { API_ENDPOINTS } from '@/core/constants'

export const authService = {
  /**
   * Get CSRF cookie before making requests
   */
  async getCsrfCookie() {
    return axios.get(`${appConfig.api.sanctumURL}${API_ENDPOINTS.CSRF_COOKIE}`)
  },

  /**
   * Login user
   * @param {Object} credentials - User credentials
   * @param {string} credentials.email - User email
   * @param {string} credentials.password - User password
   */
  async login(credentials) {
    await this.getCsrfCookie()
    return axiosInstance.post(API_ENDPOINTS.LOGIN, credentials)
  },

  /**
   * Register new user
   * @param {Object} userData - User registration data
   */
  async register(userData) {
    await this.getCsrfCookie()
    return axiosInstance.post(API_ENDPOINTS.REGISTER, userData)
  },

  /**
   * Logout current user
   */
  async logout() {
    return axiosInstance.post(API_ENDPOINTS.LOGOUT)
  },

  /**
   * Get current user info
   */
  async getCurrentUser() {
    return axiosInstance.get(API_ENDPOINTS.USER)
  },
}

export default authService
