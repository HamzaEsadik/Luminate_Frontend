<template>
  <div class="fixed w-full h-screen z-30 bg-black/85 flex justify-center items-center">
    <div class="w-[40rem] h-fill bg-secondary-light z-20 rounded-xl flex flex-col p-8 gap-6 relative">
      <svg @click="$store.dispatch('ui/closeModal', 'createTask')" class="absolute right-6 z-30 w-5 h-5 stroke-slate-500 cursor-pointer stroke-2" data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
      </svg>
      <h1>Create Task</h1>
      <form action="#" @submit.prevent="sub">
        <label for="title">Title</label>
        <input type="text" v-model="task.title" required>
        <label for="description">Description</label>
        <input type="text" v-model="task.description" required>
        <label for="start_at">Start at</label>
        <input type="date" v-model="task.start_at" required>
        <label for="ends_at">Ends at</label>
        <input type="date" v-model="task.ends_at" required>
        <button type="submit" @submit.prevent="sub">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axiosInstance from '@/core/api/axios.instance';
export default {
  data() {
    return {
      task: {
        title: '',
        description: '',
        start_at: '',
        ends_at: '',
        user_id: '',
        project_id: '',
      }
    }
  },
  methods: {
    sub() {
      // Get user_id and project_id from store
      this.task.user_id = this.$store.state.tasks.selectedUser;
      this.task.project_id = this.$store.state.projects.selectedProject;
      
      // Validate that required fields are set
      if (!this.task.project_id) {
        alert('Please select a project first from the Projects section');
        return;
      }
      
      if (this.$store.state.auth.isManager && !this.task.user_id) {
        alert('Please select a user first from the "Assign to" dropdown in the Tasks section');
        return;
      }
      
      // If not manager, use current user ID
      if (!this.$store.state.auth.isManager) {
        this.task.user_id = this.$store.state.auth.userId;
      }
      
      axiosInstance.post('/tasks', this.task)
        .then(response => {
          location.reload();
        })
        .catch(error => {
          const errorMsg = error.response?.data?.message || error.response?.data?.errors || error.message;
          console.log('Error creating task:', errorMsg);
          alert('Failed to create task: ' + JSON.stringify(errorMsg));
        });
    }
  }
}
</script>