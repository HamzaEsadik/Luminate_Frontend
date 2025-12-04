/**
 * Team Service
 * Handles all team and invitation-related API calls
 */

import axiosInstance from '@/core/api/axios.instance'
import { API_ENDPOINTS } from '@/core/constants'

export const teamService = {
  /**
   * Get all team members
   */
  async getAll() {
    return axiosInstance.get(API_ENDPOINTS.TEAM)
  },

  /**
   * Get pending invitations
   */
  async getInvitations() {
    return axiosInstance.get(API_ENDPOINTS.INVITATIONS)
  },

  /**
   * Send invitation to user
   * @param {Object} invitationData - Invitation data
   */
  async sendInvitation(invitationData) {
    return axiosInstance.post(API_ENDPOINTS.INVITATIONS, invitationData)
  },

  /**
   * Accept invitation
   */
  async acceptInvitation() {
    return axiosInstance.put(API_ENDPOINTS.ACCEPT_INVITATION)
  },

  /**
   * Reject/Delete invitation
   * @param {number|string} id - Invitation ID
   */
  async rejectInvitation(id) {
    return axiosInstance.delete(`${API_ENDPOINTS.INVITATIONS}/${id}`)
  },

  /**
   * Remove team member
   * @param {number|string} id - Team member ID
   */
  async removeMember(id) {
    return axiosInstance.delete(`${API_ENDPOINTS.TEAM}/${id}`)
  },
}

export default teamService
