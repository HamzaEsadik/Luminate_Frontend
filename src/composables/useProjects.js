/**
 * useProjects Composable
 * Provides project management functionality
 */

import { ref } from 'vue'
import { useStore } from 'vuex'
import projectService from '@/core/services/project.service'

export function useProjects() {
  const store = useStore()
  const loading = ref(false)
  const error = ref(null)

  const fetchProjects = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await projectService.getAll()
      store.commit('projects/SET_PROJECTS', response.data)
      return response.data
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to fetch projects'
      throw err
    } finally {
      loading.value = false
    }
  }

  const createProject = async (projectData) => {
    loading.value = true
    error.value = null
    
    try {
      const response = await projectService.create(projectData)
      await fetchProjects() // Refresh list
      return response.data
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to create project'
      throw err
    } finally {
      loading.value = false
    }
  }

  const deleteProject = async (id) => {
    loading.value = true
    error.value = null
    
    try {
      await projectService.delete(id)
      await fetchProjects() // Refresh list
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to delete project'
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    error,
    fetchProjects,
    createProject,
    deleteProject,
  }
}
