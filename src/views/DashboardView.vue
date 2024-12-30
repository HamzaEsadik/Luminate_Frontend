<template>
  <create-meeting class="z-50" v-if="this.$store.state.create_meeting"></create-meeting>
  <create-project class="z-50" v-if="this.$store.state.create_project"></create-project>
  <create-task class="z-50" v-if="this.$store.state.create_task"></create-task>
  <add-member class="z-50" v-if="this.$store.state.add_team"></add-member>
  <div class="flex flex-col h-screen">
    <div class="w-full h-12 bg-secondary-dark fixed z-10 flex justify-between items-center px-8">
      <svg class="cursor-pointer h-6 w-6 stroke-2 stroke-white" data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path>
      </svg>
      <h4 class="text-white cursor-pointer">{{ $store.state.user_company }}</h4>
      <svg @click="logout" class="cursor-pointer h-6 w-6 stroke-2 stroke-white" data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"></path>
      </svg>
    </div>
    <div class="w-full h-full pt-4 pb-4 pl-4 rounded-lg flex flex-col sm:flex-row gap-5">
      <div class="pt-12">
        <div class="w-fit sm:w-24 h-full box-border rounded-lg flex flex-row sm:flex-col place-items-center items-center gap-5 p-2 sm:p-5 bg-secondary-light">
          <h1 class="hidden sm:block italic text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light cursor-pointer">L</h1>
          <label class="rounded-xl p-4 cursor-pointer bg-gray-200 h-14 w-14 sm:h-16 sm:w-16 has-[:checked]:bg-gradient-to-r from-primary to-primary-light after:content-['']">
            <svg class="stroke-white has-[:checked]:stroke-white stroke-2 h-full w-full" data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
            </svg>
            <input type="radio" value="home" id="option1" name="option1" class="hidden" checked v-model="selectedView">
          </label>
          <label class="rounded-xl p-4 bg-gray-200 cursor-pointer h-14 w-14 sm:h-16 sm:w-16 has-[:checked]:bg-gradient-to-r from-primary to-primary-light after:content-['']">
            <svg class="stroke-white stroke-2 h-full w-full" data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"></path>
            </svg>
            <input type="radio" value="team" id="option2" name="option2" class="hidden" v-model="selectedView">
          </label>
        </div>
      </div>
      <div class="overflow-y-auto w-full h-full box-border rounded-lg flex flex-col place-items-center gap-5 pr-4 sm:pt-12">
        <home-page v-if="selectedView === 'home'"></home-page>
        <team-page v-if="selectedView === 'team'"></team-page>
      </div>
    </div>
  </div>
</template>
<script>
import store from '@/store';
import axios, { AxiosError } from 'axios';
axios.defaults.withCredentials = true;
export default {
  data() {
    return {
      'selectedView': 'home',
      'headers':{
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }
    }
  },
  methods: {
    logout() {
      axios.post(`${process.env.VUE_APP_API_BASE_URL}/logout`, {} ,{
        headers: this.headers
      })
        .then(response => {
          localStorage.removeItem("token");
          this.$router.push({ name: 'login' });
        })
        .catch(error => {
          console.log(error.response.data.message);
        });
    },
  },
  mounted(){
    const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
      };
    axios.get(`${process.env.VUE_APP_API_BASE_URL}/users`, {
      headers: headers
    })
      .then(response => {
        store.state.user_name = response.data.first_name;
        store.state.user_company = response.data.company;
        store.state.user_id = response.data.id;
        store.state.user_ismanager = Boolean(response.data.is_manager);
        store.state.company_id = response.data.company_id;
      })
      .catch(error => {
        localStorage.removeItem("token");
        this.$router.push({ name: 'login' });
      });
  }
}
</script>