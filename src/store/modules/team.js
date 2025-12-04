/**
 * Team Module
 * Manages team and invitations state
 */

export default {
  namespaced: true,

  state: {
    team: [],
    invitations: [],
  },

  getters: {
    allMembers: (state) => state.team,
    allInvitations: (state) => state.invitations,
    hasInvitations: (state) => state.invitations.length > 0,
    memberById: (state) => (id) => {
      return state.team.find(member => member.id === id)
    },
  },

  mutations: {
    SET_TEAM(state, team) {
      state.team = team.data || team
    },

    SET_INVITATIONS(state, invitations) {
      state.invitations = invitations.data || invitations
    },

    ADD_MEMBER(state, member) {
      state.team.push(member)
    },

    REMOVE_MEMBER(state, memberId) {
      state.team = state.team.filter(m => m.id !== memberId)
    },

    REMOVE_INVITATION(state, invitationId) {
      state.invitations = state.invitations.filter(i => i.id !== invitationId)
    },
  },

  actions: {
    setTeam({ commit }, team) {
      commit('SET_TEAM', team)
    },

    setInvitations({ commit }, invitations) {
      commit('SET_INVITATIONS', invitations)
    },

    addMember({ commit }, member) {
      commit('ADD_MEMBER', member)
    },

    removeMember({ commit }, memberId) {
      commit('REMOVE_MEMBER', memberId)
    },

    removeInvitation({ commit }, invitationId) {
      commit('REMOVE_INVITATION', invitationId)
    },
  },
}
