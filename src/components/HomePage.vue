<template>
<div class="w-full h-14">
  <h1 class="text-xl sm:text-2xl">Welcome {{$store.state.auth.userName}}!</h1>
</div>
<div v-if="$store.state.team.invitations.length > 0" class="px-4 sm:px-8 w-full h-10 bg-green-400 rounded-xl flex flex-row justify-between items-center">
  <h5 class="text-sm sm:text-base truncate">{{ $store.state.team.invitations[0].company }} invited you to join their team</h5>
  <div class="flex flex-row gap-2 sm:gap-4">
    <svg @click="accept" class="w-5 h-5 stroke-black cursor-pointer stroke-2" data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
    </svg>
    <svg @click="reject($store.state.team.invitations[0].id)" class="w-5 h-5 stroke-black cursor-pointer stroke-2" data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" >
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
    </svg>
  </div>
</div>
<div class="w-full grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
  <!--projects-->
  <div class="bg-secondary-light rounded-xl px-4 sm:px-8 py-8 sm:py-14 flex flex-col">
    <div class="h-16 sm:h-20 flex flex-row justify-between items-center">
      <h3 class="text-lg sm:text-xl">Projects</h3>
        <button v-if="$store.state.auth.isManager" class="text-xs sm:text-sm w-32 sm:w-44 font-medium" @click="$store.dispatch('ui/openModal', 'createProject')">Add new project</button>
    </div>
    <ul class="grid grid-cols-1 gap-4 sm:gap-8">
      <label @change="tasks" v-for="(project, index) in $store.state.projects.projects" :key="index" class="has-[:checked]:border-primary flex flex-col gap-3 sm:gap-5 border-2 p-3 sm:p-4 rounded-lg border-gray-300 cursor-pointer after:content-[''] after:ml-0.5 text-center">
        <input v-model="selected_project" :value="project.id" type="radio" name="option" class="hidden form-checkbox h-5 w-5 text-indigo-600">
        <div class="flex flex-row gap-2 sm:gap-3">
          <div class="h-5 w-full">
            <h5 class="line-clamp-1 text-sm sm:text-base font-semibold">{{ project.title }}</h5>
          </div>
        <svg @click="delete_project(project.id)" v-if="$store.state.auth.isManager" class="w-5 h-5 stroke-slate-500 cursor-pointer stroke-2" data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
        </svg>
        </div>
        <div>
          <p class="font-medium text-left text-sm sm:text-base">{{ project.description }}</p>
        </div>
      </label>
    </ul>
  </div>

  <!--meetings-->
  <div class="bg-secondary-light rounded-xl px-4 sm:px-8 py-8 sm:py-14 flex flex-col cursor-pointer">
    <div class="h-16 sm:h-20 flex flex-row justify-between items-center">
      <h3 class="text-lg sm:text-xl">Upcoming meetings</h3>
        <button v-if="$store.state.auth.isManager" class="text-xs sm:text-sm w-32 sm:w-44 font-medium" @click="$store.dispatch('ui/openModal', 'createMeeting')">Add new meeting</button>
    </div>
    <ul class="grid grid-cols-1 gap-4 sm:gap-8">
      <li v-for="(meeting, index) in $store.state.meetings.meetings" :key="index" class="flex flex-row gap-2 sm:gap-3 items-center">
        <div class="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-white shrink-0 flex flex-col">
          <div class="w-full h-4 rounded-t-xl bg-secondary-dark">
            <p class="text-white text-xs">apr</p>
          </div>
          <div class="w-full h-full rounded-b-xl flex flex-col justify-center">
            <p class="text-xl sm:text-2xl font-bold text-primary h-fit">25</p>
          </div>
        </div>
        <div class="h-14 w-full">
          <h5 class="line-clamp-1 text-sm sm:text-base">{{ meeting.title }}</h5>
          <h5 class="text-xs sm:text-sm text-slate-500">{{ meeting.datetime }}</h5>
        </div>
        <svg @click="delete_meeting(meeting.id)" v-if="$store.state.auth.isManager" class="w-5 h-5 stroke-slate-500 cursor-pointer stroke-2" data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
        </svg>
      </li>
    </ul>
  </div>
  
  <!--tasks-->
  <div class="bg-secondary-light rounded-xl px-4 sm:px-8 py-8 sm:py-14 flex flex-col">
    <div class="h-16 sm:h-20 flex flex-row justify-between items-center">
      <h3 class="text-lg sm:text-xl">Tasks</h3>
        <button v-if="$store.state.auth.isManager" class="text-xs sm:text-sm w-32 sm:w-44 font-medium" @click="$store.dispatch('ui/openModal', 'createTask')">Add new task</button>
    </div>
    <select @change="tasks" v-model="selected_user" v-if="$store.state.auth.isManager" name="user" id="user" class="h-12 sm:h-14 text-sm sm:text-lg bg-secondary-light border-gray-300 active:border-gray-300">
      <option v-for="user in $store.state.team.team" :key="user.id" :value="user.id">{{ user.first_name + ' ' + user.last_name}}</option>
    </select>
    <ul class="grid grid-cols-1 gap-4 sm:gap-8">
      <li v-for="task in $store.state.tasks.tasks" :key="task.id" class="flex flex-col gap-3 sm:gap-5 border-2 p-3 sm:p-4 rounded-lg border-gray-300 has-[:checked]:border-primary">
        <div class="flex flex-row gap-2 sm:gap-3">
          <div class="h-5 w-full">
            <h5 class="line-clamp-1 text-sm sm:text-base font-semibold">{{ task.title }}</h5>
          </div>
          <svg @click="delete_task(task.id)" v-if="$store.state.auth.isManager" class="w-5 h-5 stroke-slate-500 cursor-pointer stroke-2" data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
          </svg>
        </div>
        <div>
          <p class="font-medium text-left text-sm sm:text-base">{{ task.description }}</p>
        </div>
        <div v-show="!$store.state.auth.isManager" class="flex flex-row gap-2">
          <input type="checkbox" :checked="Boolean(task.done)" @change="check_task(task.id)" class="h-4 w-4" name="done">
          <label class="after:content-[''] after:ml-0.5 after:text-red-500;" for="done">done</label>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import axiosInstance from '@/core/api/axios.instance';
export default {
  data() {
    return {
      selected_project: null,
      selected_user: null,
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
      axiosInstance.get('/invitations')
        .then(response => {
          this.$store.dispatch('team/setInvitations', response.data);
        })
        .catch(error => {
          localStorage.removeItem("token");
          this.$router.push({ name: 'login' });
        });
    },
    projects() {
      axiosInstance.get('/projects')
        .then(response => {
          this.$store.dispatch('projects/setProjects', response.data);
        })
        .catch(error => {
          localStorage.removeItem("token");
          this.$router.push({ name: 'login' });
        });
    },
    meetings() {
      axiosInstance.get('/meetings')
        .then(response => {
          this.$store.dispatch('meetings/setMeetings', response.data);
        })
        .catch(error => {
          localStorage.removeItem("token");
          this.$router.push({ name: 'login' });
        });
    },
    team() {
      axiosInstance.get('/team')
        .then(response => {
          this.$store.dispatch('team/setTeam', response.data);
        })
        .catch(error => {
          localStorage.removeItem("token");
          this.$router.push({ name: 'login' });
        });
    },
    accept() {
      axiosInstance.put('/accept', {})
        .then(response => {
          location.reload();
        })
        .catch(error => {
          console.log(error.response?.data?.message || error.message);
        });
    },
    reject(id) {
      axiosInstance.delete(`/invitations/${id}`)
        .then(response => {
          location.reload();
        })
        .catch(error => {
          console.log(error.response?.data?.message || error.message);
        });
    },
    tasks() {
      this.$store.dispatch('tasks/selectUser', this.selected_user);
      this.$store.dispatch('projects/selectProject', this.selected_project);
      
      if(this.$store.state.auth.isManager) {
        const link = `/tasksfor?user_id=${this.selected_user}&project_id=${this.selected_project}`;
        axiosInstance.get(link)
          .then(response => {
            this.$store.dispatch('tasks/setTasks', response.data);
          })
          .catch(error => {
            localStorage.removeItem("token");
            this.$router.push({ name: 'login' });
          });
      } else {
        const link = `/tasks?project_id=${this.selected_project}`;
        axiosInstance.get(link)
          .then(response => {
            this.$store.dispatch('tasks/setTasks', response.data);
          })
          .catch(error => {
            localStorage.removeItem("token");
            this.$router.push({ name: 'login' });
          });
      }
    },
    delete_project(id) {
      axiosInstance.delete(`/projects/${id}`)
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
      axiosInstance.delete(`/meetings/${id}`)
        .then(response => {
          this.meetings();
        })
        .catch(error => {
          localStorage.removeItem("token");
          this.$router.push({ name: 'login' });
        });
    },
    delete_task(id) {
      axiosInstance.delete(`/tasks/${id}`)
        .then(response => {
          this.tasks();
        })
        .catch(error => {
          localStorage.removeItem("token");
          this.$router.push({ name: 'login' });
        });
    },
    check_task(id) {
      axiosInstance.put(`/tasks/${id}`, {})
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
