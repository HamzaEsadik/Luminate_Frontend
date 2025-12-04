/**
 * Tasks Module
 * Manages tasks state
 */

export default {
  namespaced: true,

  state: {
    tasks: [],
    selectedUser: null,
  },

  getters: {
    allTasks: (state) => state.tasks,
    selectedUser: (state) => state.selectedUser,
    tasksByProject: (state) => (projectId) => {
      return state.tasks.filter(task => task.project_id === projectId)
    },
    tasksByUser: (state) => (userId) => {
      return state.tasks.filter(task => task.user_id === userId)
    },
    completedTasks: (state) => {
      return state.tasks.filter(task => task.done)
    },
    pendingTasks: (state) => {
      return state.tasks.filter(task => !task.done)
    },
  },

  mutations: {
    SET_TASKS(state, tasks) {
      state.tasks = tasks.data || tasks
    },

    SET_SELECTED_USER(state, userId) {
      state.selectedUser = userId
    },

    ADD_TASK(state, task) {
      state.tasks.push(task)
    },

    REMOVE_TASK(state, taskId) {
      state.tasks = state.tasks.filter(t => t.id !== taskId)
    },

    UPDATE_TASK(state, updatedTask) {
      const index = state.tasks.findIndex(t => t.id === updatedTask.id)
      if (index !== -1) {
        state.tasks.splice(index, 1, updatedTask)
      }
    },

    TOGGLE_TASK_DONE(state, taskId) {
      const task = state.tasks.find(t => t.id === taskId)
      if (task) {
        task.done = !task.done
      }
    },
  },

  actions: {
    setTasks({ commit }, tasks) {
      commit('SET_TASKS', tasks)
    },

    selectUser({ commit }, userId) {
      commit('SET_SELECTED_USER', userId)
    },

    addTask({ commit }, task) {
      commit('ADD_TASK', task)
    },

    removeTask({ commit }, taskId) {
      commit('REMOVE_TASK', taskId)
    },

    updateTask({ commit }, task) {
      commit('UPDATE_TASK', task)
    },

    toggleTaskDone({ commit }, taskId) {
      commit('TOGGLE_TASK_DONE', taskId)
    },
  },
}
