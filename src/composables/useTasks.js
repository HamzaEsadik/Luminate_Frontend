/**
 * useTasks Composable
 * Provides task management functionality
 */

import { ref } from 'vue'
import { useStore } from 'vuex'
import taskService from '@/core/services/task.service'

export function useTasks() {
  const store = useStore()
  const loading = ref(false)
  const error = ref(null)

  const fetchTasks = async (params = {}) => {
    loading.value = true
    error.value = null
    
    try {
      const response = await taskService.getAll(params)
      store.commit('tasks/SET_TASKS', response.data)
      return response.data
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to fetch tasks'
      throw err
    } finally {
      loading.value = false
    }
  }

  const createTask = async (taskData) => {
    loading.value = true
    error.value = null
    
    try {
      const response = await taskService.create(taskData)
      await fetchTasks() // Refresh list
      return response.data
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to create task'
      throw err
    } finally {
      loading.value = false
    }
  }

  const toggleTaskDone = async (id, done) => {
    loading.value = true
    error.value = null
    
    try {
      await taskService.toggleDone(id, done)
      await fetchTasks() // Refresh list
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to update task'
      throw err
    } finally {
      loading.value = false
    }
  }

  const deleteTask = async (id) => {
    loading.value = true
    error.value = null
    
    try {
      await taskService.delete(id)
      await fetchTasks() // Refresh list
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to delete task'
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    error,
    fetchTasks,
    createTask,
    toggleTaskDone,
    deleteTask,
  }
}
