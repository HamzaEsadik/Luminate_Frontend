/**
 * Projects Module
 * Manages projects state
 */

export default {
  namespaced: true,

  state: {
    projects: [],
    selectedProject: null,
  },

  getters: {
    allProjects: (state) => state.projects,
    selectedProject: (state) => state.selectedProject,
    projectById: (state) => (id) => {
      return state.projects.find(project => project.id === id)
    },
  },

  mutations: {
    SET_PROJECTS(state, projects) {
      state.projects = projects.data || projects
    },

    SET_SELECTED_PROJECT(state, projectId) {
      state.selectedProject = projectId
    },

    ADD_PROJECT(state, project) {
      state.projects.push(project)
    },

    REMOVE_PROJECT(state, projectId) {
      state.projects = state.projects.filter(p => p.id !== projectId)
    },

    UPDATE_PROJECT(state, updatedProject) {
      const index = state.projects.findIndex(p => p.id === updatedProject.id)
      if (index !== -1) {
        state.projects.splice(index, 1, updatedProject)
      }
    },
  },

  actions: {
    setProjects({ commit }, projects) {
      commit('SET_PROJECTS', projects)
    },

    selectProject({ commit }, projectId) {
      commit('SET_SELECTED_PROJECT', projectId)
    },

    addProject({ commit }, project) {
      commit('ADD_PROJECT', project)
    },

    removeProject({ commit }, projectId) {
      commit('REMOVE_PROJECT', projectId)
    },

    updateProject({ commit }, project) {
      commit('UPDATE_PROJECT', project)
    },
  },
}
