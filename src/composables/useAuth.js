/**
 * useAuth Composable
 * Provides authentication functionality
 */

import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import authService from '@/core/services/auth.service'
import { STORAGE_KEYS, ROUTE_NAMES } from '@/core/constants'

export function useAuth() {
  const router = useRouter()
  const store = useStore()
  const loading = ref(false)
  const error = ref(null)

  const isAuthenticated = computed(() => {
    return !!localStorage.getItem(STORAGE_KEYS.TOKEN)
  })

  const login = async (credentials) => {
    loading.value = true
    error.value = null
    
    try {
      const response = await authService.login(credentials)
      localStorage.setItem(STORAGE_KEYS.TOKEN, response.data.token)
      await fetchCurrentUser()
      router.push({ name: ROUTE_NAMES.DASHBOARD })
      return response.data
    } catch (err) {
      // Handle validation errors from Laravel
      if (err.response?.data?.errors) {
        const errors = err.response.data.errors
        const firstErrorKey = Object.keys(errors)[0]
        error.value = errors[firstErrorKey][0]
      } else {
        error.value = err.response?.data?.message || 'Login failed'
      }
      throw err
    } finally {
      loading.value = false
    }
  }

  const logout = async () => {
    loading.value = true
    error.value = null
    
    try {
      await authService.logout()
    } catch (err) {
      console.error('Logout error:', err)
    } finally {
      localStorage.removeItem(STORAGE_KEYS.TOKEN)
      store.commit('auth/CLEAR_USER')
      router.push({ name: ROUTE_NAMES.LOGIN })
      loading.value = false
    }
  }

  const register = async (userData) => {
    loading.value = true
    error.value = null
    
    try {
      const response = await authService.register(userData)
      localStorage.setItem(STORAGE_KEYS.TOKEN, response.data.token)
      await fetchCurrentUser()
      router.push({ name: ROUTE_NAMES.DASHBOARD })
      return response.data
    } catch (err) {
      // Handle validation errors from Laravel
      if (err.response?.data?.errors) {
        const errors = err.response.data.errors
        const firstErrorKey = Object.keys(errors)[0]
        error.value = errors[firstErrorKey][0]
      } else {
        error.value = err.response?.data?.message || 'Registration failed'
      }
      throw err
    } finally {
      loading.value = false
    }
  }

  const fetchCurrentUser = async () => {
    try {
      const response = await authService.getCurrentUser()
      store.commit('auth/SET_USER', response.data)
      return response.data
    } catch (err) {
      console.error('Failed to fetch user:', err)
      throw err
    }
  }

  return {
    loading,
    error,
    isAuthenticated,
    login,
    logout,
    register,
    fetchCurrentUser,
  }
}
