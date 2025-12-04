/**
 * UI Module
 * Manages UI state (modals, loading, etc.)
 */

export default {
  namespaced: true,

  state: {
    modals: {
      createMeeting: false,
      createProject: false,
      createTask: false,
      addTeam: false,
    },
    loading: false,
    error: null,
  },

  getters: {
    isModalOpen: (state) => (modalName) => {
      return state.modals[modalName] || false
    },
    isLoading: (state) => state.loading,
    error: (state) => state.error,
  },

  mutations: {
    OPEN_MODAL(state, modalName) {
      state.modals[modalName] = true
    },

    CLOSE_MODAL(state, modalName) {
      state.modals[modalName] = false
    },

    CLOSE_ALL_MODALS(state) {
      Object.keys(state.modals).forEach(key => {
        state.modals[key] = false
      })
    },

    SET_LOADING(state, loading) {
      state.loading = loading
    },

    SET_ERROR(state, error) {
      state.error = error
    },

    CLEAR_ERROR(state) {
      state.error = null
    },
  },

  actions: {
    openModal({ commit }, modalName) {
      commit('OPEN_MODAL', modalName)
    },

    closeModal({ commit }, modalName) {
      commit('CLOSE_MODAL', modalName)
    },

    closeAllModals({ commit }) {
      commit('CLOSE_ALL_MODALS')
    },

    setLoading({ commit }, loading) {
      commit('SET_LOADING', loading)
    },

    setError({ commit }, error) {
      commit('SET_ERROR', error)
    },

    clearError({ commit }) {
      commit('CLEAR_ERROR')
    },
  },
}
