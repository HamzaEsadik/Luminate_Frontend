import { createStore } from 'vuex'

export default createStore({
  state: {
    create_meeting: false,
    create_project: false,
    create_task: false,
    add_team: false,
    user_name: '',
    user_id: '',
    user_company: '',
    company_id: '',
    user_ismanager: null,
    
    projects: [],
    meetings: [],
    team: [],
    tasks: [],
    invitations: [],

    selected_project: '',
    selected_user: '',
  },
  getters: {
  },
  mutations: {
    open_meeting(state) {
      state.create_meeting = true;
    },
    open_project(state) {
      state.create_project = true;
    },
    open_task(state) {
      state.create_task = true;
    },
    open_team(state) {
      state.add_team = true;
    },
    close_meeting(state) {
      state.create_meeting = false;
    },
    close_project(state) {
      state.create_project = false;
    },
    close_task(state) {
      state.create_task = false;
    },
    close_team(state) {
      state.add_team = false;
    },
  },
  actions: {
  },
  modules: {
  }
})
