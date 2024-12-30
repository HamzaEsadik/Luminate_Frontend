<template>
<div class=" w-full h-14">
  <h1>Welcome {{$store.state.user_name}}!</h1>
</div>
<div v-if="this.inv > 0" class="px-8 w-full h-10 bg-green-400 rounded-xl flex flex-row justify-between items-center">
  <h5>{{ $store.state.invitations.data[0].company }} invited you to join there team</h5>
  <div class="flex flex-row gap-4">
    <svg @click="accept" class="z-30 w-5 h-5 stroke-black cursor-pointer stroke-2" data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
    </svg>
    <svg @click="reject($store.state.invitations.data[0].id)" class="z-30 w-5 h-5 stroke-black cursor-pointer stroke-2" data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" >
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
    </svg>
  </div>
</div>
<div class="w-full grid grid-cols-1 gap-6 md:grid-cols-2">
  <!--projects-->
  <div class="bg-secondary-light rounded-xl px-8 py-14 flex flex-col">
    <div class="h-20 flex flex-row justify-between">
      <h3>Projects</h3>
        <button v-if="$store.state.user_ismanager" class="text-sm w-44 font-medium" @click="this.$store.commit('open_project')">Add new project</button>
    </div>
    <ul class="grid grid-cols-1 gap-8">
      <label @change="tasks" v-for="(project, index) in $store.state.projects.data" :key="index" class="has-[:checked]:border-primary flex flex-col gap-5 border-2 p-4 rounded-lg border-gray-300 cursor-pointer after:content-[''] after:ml-0.5 text-center">
        <input v-model="selected_project" :value="project.id" type="radio" name="option" class="hidden form-checkbox h-5 w-5 text-indigo-600">
        <div class="flex flex-row gap-3">
          <div class="h-5 w-full">
            <h5 class="line-clamp-1 font-semibold">{{ project.title }}</h5>
          </div>
        <svg @click="delete_project(project.id)" v-if="$store.state.user_ismanager" class="z-30 w-5 h-5 stroke-slate-500 cursor-pointer stroke-2" data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
        </svg>
        </div>
        <div>
          <p class="font-medium text-left text-base">{{ project.description }}</p>
        </div>
      </label>
      
    </ul>
  </div>

  <!--meetings-->
  <div class="bg-secondary-light rounded-xl px-8 py-14 flex flex-col cursor-pointer">
    <div class="h-20 flex flex-row justify-between">
      <h3>Upcoming meetings</h3>
        <button v-if="$store.state.user_ismanager" class="text-sm w-44 font-medium" @click="this.$store.commit('open_meeting')">Add new meeting</button>
    </div>
    <ul class="grid grid-cols-1 gap-8">
      <li v-for="(meeting, index) in $store.state.meetings.data" :key="index" class="flex flex-row gap-3">
        <div class="h-14 w-14 rounded-xl bg-white shrink-0 flex flex-col">
          <div class="w-full h-4 rounded-t-xl bg-secondary-dark">
            <p class="text-white text-xs">apr</p>
          </div>
          <div class="w-full h-full rounded-b-xl flex flex-col justify-center">
            <p class="text-2xl font-bold text-primary h-fit">25</p>
          </div>
        </div>
        <div class="h-14 w-full">
          <h5 class="line-clamp-1">{{ meeting.title }}</h5>
          <h5 class="text-sm text-slate-500">{{ meeting.datetime }}</h5>
        </div>
        <svg @click="delete_meeting(meeting.id)" v-if="$store.state.user_ismanager" class="z-30 w-5 h-5 stroke-slate-500 cursor-pointer stroke-2" data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
        </svg>
      </li>
    </ul>
  </div>
  
  <!--tasks-->
  <div class="bg-secondary-light rounded-xl px-8 py-14 flex flex-col">
    <div class="h-20 flex flex-row justify-between">
      <h3>Tasks</h3>
        <button v-if="$store.state.user_ismanager" class="text-sm w-44 font-medium" @click="this.$store.commit('open_task')">Add new task</button>
    </div>
    <select @change="tasks" v-model="selected_user" v-if="$store.state.user_ismanager" name="user" id="user" class="h-14 text-lg bg-secondary-light border-gray-300 active:border-gray-300">
      <option v-for="user in $store.state.team" :key="user.id" :value="user.id">{{ user.first_name + ' ' + user.last_name}}</option>
    </select>
    <ul class="grid grid-cols-1 gap-8">
      <li v-for="task in $store.state.tasks.data" :key="task.id" class="flex flex-col gap-5 border-2 p-4 rounded-lg border-gray-300 has-[:checked]:border-primary">
        <div class="flex flex-row gap-3">
          <div class="h-5 w-full">
            <h5 class="line-clamp-1 font-semibold">{{ task.title }}</h5>
          </div>
          <svg @click="delete_task(task.id)" v-if="$store.state.user_ismanager" class="z-30 w-5 h-5 stroke-slate-500 cursor-pointer stroke-2" data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
          </svg>
        </div>
        <div>
          <p class="font-medium text-left text-base">{{ task.description }}</p>
        </div>
        <div v-show="!$store.state.user_ismanager" class="flex flex-row gap-2">
          <input type="checkbox" :checked="Boolean(task.done)" @change="check_task(task.id)" class="h-4 w-4" name="done">
          <label class="after:content-[''] after:ml-0.5 after:text-red-500;" for="done">done</label>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import store from '@/store';
import axios, { AxiosError } from 'axios';
export default {
  data() {
    return {
      'selected_project': null,
      'selected_user': null,
      'inv': 0,
    }
  },
  mounted(){
      //get Invitations
      this.invitations();
      //get projects
      this.projects();
      //get meetings
      this.meetings();
      //get team
      this.team();
  },
  methods: {
    invitations() {
      const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
      };
      axios.get(`${process.env.VUE_APP_API_BASE_URL}/invitations`, {
        headers: headers
        })
        .then(response => {
          store.state.invitations = response.data;
          this.inv = store.state.invitations.data.length;
        })
        .catch(error => {
          localStorage.removeItem("token");
          this.$router.push({ name: 'login' });
        });
    },
    projects() {
      const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
      };
      axios.get(`${process.env.VUE_APP_API_BASE_URL}/projects`, {
      headers: headers
    })
      .then(response => {
        store.state.projects = response.data;
      })
      .catch(error => {
        localStorage.removeItem("token");
        this.$router.push({ name: 'login' });
      });
    },
    meetings() {
      const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
      };
      axios.get(`${process.env.VUE_APP_API_BASE_URL}/meetings`, {
          headers: headers
        })
          .then(response => {
            store.state.meetings = response.data;
          })
          .catch(error => {
            localStorage.removeItem("token");
            this.$router.push({ name: 'login' });
          });
    },
    team() {
      const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
      };
      axios.get(`${process.env.VUE_APP_API_BASE_URL}/team`, {
        headers: headers
        })
        .then(response => {
          store.state.team = response.data;
        })
        .catch(error => {
          localStorage.removeItem("token");
          this.$router.push({ name: 'login' });
        })
    },
    accept (){
      const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
      };
      axios.put(`${process.env.VUE_APP_API_BASE_URL}/accept`,{}, {
        headers: headers
      })
        .then(response => {
          location.reload();
        })
        .catch(error => {
          console.log(error.response.data.message);
        });
    },
    reject (id) {
      const link = `${process.env.VUE_APP_API_BASE_URL}/invitations/` + id;
      const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
      };
      axios.delete(link, {
        headers: headers
      })
        .then(response => {
          location.reload();
        })
        .catch(error => {
          console.log(error.response.data.message);
        });
    },
    tasks() {
      store.state.selected_user = this.selected_user;
      store.state.selected_project = this.selected_project;
      const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
      };
      if(store.state.user_ismanager) {
        const link = `${process.env.VUE_APP_API_BASE_URL}/tasksfor?user_id=` + this.selected_user + '&project_id=' + this.selected_project; 
        axios.get(link, {
          headers: headers
          })
          .then(response => {
            store.state.tasks = response.data;
          })
          .catch(error => {
            localStorage.removeItem("token");
            this.$router.push({ name: 'login' });
          });
      } else {
        //get tasks
      const link = `${process.env.VUE_APP_API_BASE_URL}/tasks?project_id=` + this.selected_project; 
        axios.get(link, {
          headers: headers
          })
          .then(response => {
            store.state.tasks = response.data;
          })
          .catch(error => {
            localStorage.removeItem("token");
            this.$router.push({ name: 'login' });
          });
      }
    },
    delete_project(id) {
      const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
      };
      const link = `${process.env.VUE_APP_API_BASE_URL}/projects/` + id;
        axios.delete(link, {
          headers: headers
          })
          .then(response => {
            this.projects();
            this.tasks();
          })
          .catch(error => {
            localStorage.removeItem("token");
            this.$router.push({ name: 'login' });
          });
    },
    delete_meeting(id) {
      const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
      };
      const link = `${process.env.VUE_APP_API_BASE_URL}/meetings/` + id;
        axios.delete(link, {
          headers: headers
          })
          .then(response => {
            this.meetings();
          })
          .catch(error => {
            localStorage.removeItem("token");
            this.$router.push({ name: 'login' });
          });
    },
    delete_task(id) {
      const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
      };
      const link = `${process.env.VUE_APP_API_BASE_URL}/tasks/` + id;
        axios.delete(link, {
          headers: headers
          })
          .then(response => {
            this.tasks();
          })
          .catch(error => {
            localStorage.removeItem("token");
            this.$router.push({ name: 'login' });
          });
    },
    check_task(id) {
      const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
      };
      const link = `${process.env.VUE_APP_API_BASE_URL}/tasks/` + id;
        axios.put(link, {}, {
          headers: headers
          })
          .then(response => {
            this.tasks();
          })
          .catch(error => {
            localStorage.removeItem("token");
            this.$router.push({ name: 'login' });
          });
    }
  }
}
</script>
