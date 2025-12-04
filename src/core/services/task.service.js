/**
 * Tasks Service
 * Handles all task-related API calls
 */

import axiosInstance from '@/core/api/axios.instance'
import { API_ENDPOINTS } from '@/core/constants'

export const taskService = {
  /**
   * Get all tasks (optionally filtered by project/user)
   * @param {Object} params - Query parameters
   */
  async getAll(params = {}) {
    return axiosInstance.get(API_ENDPOINTS.TASKS, { params })
  },

  /**
   * Get single task by ID
   * @param {number|string} id - Task ID
   */
  async getById(id) {
    return axiosInstance.get(`${API_ENDPOINTS.TASKS}/${id}`)
  },

  /**
   * Create new task
   * @param {Object} taskData - Task data
   * @param {string} taskData.title - Task title
   * @param {string} taskData.description - Task description
   * @param {string} taskData.start_at - Task start date
   * @param {string} taskData.ends_at - Task end date
   * @param {number|string} taskData.user_id - Assigned user ID
   * @param {number|string} taskData.project_id - Project ID
   */
  async create(taskData) {
    return axiosInstance.post(API_ENDPOINTS.TASKS, taskData)
  },

  /**
   * Update existing task
   * @param {number|string} id - Task ID
   * @param {Object} taskData - Updated task data
   */
  async update(id, taskData) {
    return axiosInstance.put(`${API_ENDPOINTS.TASKS}/${id}`, taskData)
  },

  /**
   * Mark task as done/undone
   * @param {number|string} id - Task ID
   * @param {boolean} done - Task completion status
   */
  async toggleDone(id, done) {
    return axiosInstance.patch(`${API_ENDPOINTS.TASKS}/${id}`, { done })
  },

  /**
   * Delete task
   * @param {number|string} id - Task ID
   */
  async delete(id) {
    return axiosInstance.delete(`${API_ENDPOINTS.TASKS}/${id}`)
  },
}

export default taskService
