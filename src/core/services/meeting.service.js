/**
 * Meetings Service
 * Handles all meeting-related API calls
 */

import axiosInstance from '@/core/api/axios.instance'
import { API_ENDPOINTS } from '@/core/constants'

export const meetingService = {
  /**
   * Get all meetings
   */
  async getAll() {
    return axiosInstance.get(API_ENDPOINTS.MEETINGS)
  },

  /**
   * Get single meeting by ID
   * @param {number|string} id - Meeting ID
   */
  async getById(id) {
    return axiosInstance.get(`${API_ENDPOINTS.MEETINGS}/${id}`)
  },

  /**
   * Create new meeting
   * @param {Object} meetingData - Meeting data
   * @param {string} meetingData.title - Meeting title
   * @param {string} meetingData.datetime - Meeting datetime
   */
  async create(meetingData) {
    return axiosInstance.post(API_ENDPOINTS.MEETINGS, meetingData)
  },

  /**
   * Update existing meeting
   * @param {number|string} id - Meeting ID
   * @param {Object} meetingData - Updated meeting data
   */
  async update(id, meetingData) {
    return axiosInstance.put(`${API_ENDPOINTS.MEETINGS}/${id}`, meetingData)
  },

  /**
   * Delete meeting
   * @param {number|string} id - Meeting ID
   */
  async delete(id) {
    return axiosInstance.delete(`${API_ENDPOINTS.MEETINGS}/${id}`)
  },
}

export default meetingService
