/**
 * useMeetings Composable
 * Provides meeting management functionality
 */

import { ref } from 'vue'
import { useStore } from 'vuex'
import meetingService from '@/core/services/meeting.service'

export function useMeetings() {
  const store = useStore()
  const loading = ref(false)
  const error = ref(null)

  const fetchMeetings = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await meetingService.getAll()
      store.commit('meetings/SET_MEETINGS', response.data)
      return response.data
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to fetch meetings'
      throw err
    } finally {
      loading.value = false
    }
  }

  const createMeeting = async (meetingData) => {
    loading.value = true
    error.value = null
    
    try {
      const response = await meetingService.create(meetingData)
      await fetchMeetings() // Refresh list
      return response.data
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to create meeting'
      throw err
    } finally {
      loading.value = false
    }
  }

  const deleteMeeting = async (id) => {
    loading.value = true
    error.value = null
    
    try {
      await meetingService.delete(id)
      await fetchMeetings() // Refresh list
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to delete meeting'
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    error,
    fetchMeetings,
    createMeeting,
    deleteMeeting,
  }
}
