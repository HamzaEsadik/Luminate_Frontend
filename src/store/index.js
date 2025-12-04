/**
 * Vuex Store
 * Main store configuration with modular structure
 */

import { createStore } from 'vuex'
import auth from './modules/auth'
import projects from './modules/projects'
import meetings from './modules/meetings'
import tasks from './modules/tasks'
import team from './modules/team'
import ui from './modules/ui'

export default createStore({
  modules: {
    auth,
    projects,
    meetings,
    tasks,
    team,
    ui,
  },
  
  // Strict mode in development
  strict: process.env.NODE_ENV !== 'production',
})
