/**
 * Projects Service
 * Handles all project-related API calls
 */

import axiosInstance from '@/core/api/axios.instance'
import { API_ENDPOINTS } from '@/core/constants'

export const projectService = {
  /**
   * Get all projects
   */
  async getAll() {
    return axiosInstance.get(API_ENDPOINTS.PROJECTS)
  },

  /**
   * Get single project by ID
   * @param {number|string} id - Project ID
   */
  async getById(id) {
    return axiosInstance.get(`${API_ENDPOINTS.PROJECTS}/${id}`)
  },

  /**
   * Create new project
   * @param {Object} projectData - Project data
   * @param {string} projectData.title - Project title
   * @param {string} projectData.description - Project description
   */
  async create(projectData) {
    return axiosInstance.post(API_ENDPOINTS.PROJECTS, projectData)
  },

  /**
   * Update existing project
   * @param {number|string} id - Project ID
   * @param {Object} projectData - Updated project data
   */
  async update(id, projectData) {
    return axiosInstance.put(`${API_ENDPOINTS.PROJECTS}/${id}`, projectData)
  },

  /**
   * Delete project
   * @param {number|string} id - Project ID
   */
  async delete(id) {
    return axiosInstance.delete(`${API_ENDPOINTS.PROJECTS}/${id}`)
  },
}

export default projectService
