/**
 * Meetings Module
 * Manages meetings state
 */

export default {
  namespaced: true,

  state: {
    meetings: [],
  },

  getters: {
    allMeetings: (state) => state.meetings,
    upcomingMeetings: (state) => {
      const now = new Date()
      return state.meetings.filter(meeting => new Date(meeting.datetime) > now)
    },
    meetingById: (state) => (id) => {
      return state.meetings.find(meeting => meeting.id === id)
    },
  },

  mutations: {
    SET_MEETINGS(state, meetings) {
      state.meetings = meetings.data || meetings
    },

    ADD_MEETING(state, meeting) {
      state.meetings.push(meeting)
    },

    REMOVE_MEETING(state, meetingId) {
      state.meetings = state.meetings.filter(m => m.id !== meetingId)
    },

    UPDATE_MEETING(state, updatedMeeting) {
      const index = state.meetings.findIndex(m => m.id === updatedMeeting.id)
      if (index !== -1) {
        state.meetings.splice(index, 1, updatedMeeting)
      }
    },
  },

  actions: {
    setMeetings({ commit }, meetings) {
      commit('SET_MEETINGS', meetings)
    },

    addMeeting({ commit }, meeting) {
      commit('ADD_MEETING', meeting)
    },

    removeMeeting({ commit }, meetingId) {
      commit('REMOVE_MEETING', meetingId)
    },

    updateMeeting({ commit }, meeting) {
      commit('UPDATE_MEETING', meeting)
    },
  },
}
