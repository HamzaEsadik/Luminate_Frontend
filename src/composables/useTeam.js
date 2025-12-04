/**
 * useTeam Composable
 * Provides team and invitation management functionality
 */

import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import teamService from '@/core/services/team.service'

export function useTeam() {
  const store = useStore()
  const loading = ref(false)
  const error = ref(null)

  const hasInvitations = computed(() => {
    return store.state.team?.invitations?.data?.length > 0
  })

  const fetchTeam = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await teamService.getAll()
      store.commit('team/SET_TEAM', response.data)
      return response.data
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to fetch team'
      throw err
    } finally {
      loading.value = false
    }
  }

  const fetchInvitations = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await teamService.getInvitations()
      store.commit('team/SET_INVITATIONS', response.data)
      return response.data
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to fetch invitations'
      throw err
    } finally {
      loading.value = false
    }
  }

  const sendInvitation = async (invitationData) => {
    loading.value = true
    error.value = null
    
    try {
      const response = await teamService.sendInvitation(invitationData)
      return response.data
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to send invitation'
      throw err
    } finally {
      loading.value = false
    }
  }

  const acceptInvitation = async () => {
    loading.value = true
    error.value = null
    
    try {
      await teamService.acceptInvitation()
      await fetchInvitations() // Refresh list
      await fetchTeam() // Refresh team
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to accept invitation'
      throw err
    } finally {
      loading.value = false
    }
  }

  const rejectInvitation = async (id) => {
    loading.value = true
    error.value = null
    
    try {
      await teamService.rejectInvitation(id)
      await fetchInvitations() // Refresh list
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to reject invitation'
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    error,
    hasInvitations,
    fetchTeam,
    fetchInvitations,
    sendInvitation,
    acceptInvitation,
    rejectInvitation,
  }
}
