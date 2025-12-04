/**
 * Auth Module
 * Manages authentication state
 */

export default {
  namespaced: true,

  state: {
    user: null,
    userName: '',
    userId: '',
    userCompany: '',
    companyId: '',
    isManager: false,
  },

  getters: {
    isAuthenticated: (state) => !!state.user,
    userName: (state) => state.userName,
    userCompany: (state) => state.userCompany,
    isManager: (state) => state.isManager,
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user
      state.userName = user.first_name || ''
      state.userId = user.id || ''
      state.userCompany = user.company || ''
      state.companyId = user.company_id || ''
      state.isManager = Boolean(user.is_manager)
    },

    CLEAR_USER(state) {
      state.user = null
      state.userName = ''
      state.userId = ''
      state.userCompany = ''
      state.companyId = ''
      state.isManager = false
    },
  },

  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user)
    },

    clearUser({ commit }) {
      commit('CLEAR_USER')
    },
  },
}
