<template>
  <div class="fixed w-full h-screen z-30 bg-black/85 flex justify-center items-center">
    <div class="w-[40rem] h-fill bg-secondary-light z-20 rounded-xl flex flex-col p-8 gap-6 relative">
      <svg @click="this.$store.commit('close_project')" class="absolute right-6 z-30 w-5 h-5 stroke-slate-500 cursor-pointer stroke-2" data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
      </svg>
      <h1>Create Project</h1>
      <form action="#" @submit.prevent="sub">
        <label for="title">Title</label>
        <input type="text" v-model="project.title" required>
        <label for="description">Description</label>
        <input type="text-local" v-model="project.description" required>
        <button type="submit" @submit.prevent="sub">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import axios, { AxiosError } from 'axios';
export default {
  data() {
    return {
      'project': {
        'title': '',
        'description': ''
      }
    }
  },
  methods: {
    sub() {
      const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
      };
      axios.post('http://127.0.0.1:8000/api/projects',this.project, {
        headers: headers,
      })
        .then(response => {
          location.reload();
        })
        .catch(error => {
          console.log(error.response.data.message);
        });
    }
  }
}
</script>