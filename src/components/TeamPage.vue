<template>
  <div class=" w-full h-14">
    <h1>Welcome Hamza!</h1>
  </div>
  <div class="bg-secondary-light w-full rounded-xl px-8 py-14 flex flex-col">

    <div class="h-20 flex flex-row justify-between">
      <h2>Team</h2>
        <button v-if="$store.state.user_ismanager" class="w-44" @click="this.$store.commit('open_team')">Add new member</button>
    </div>
    <ul class="grid grid-cols-1 gap-5">
      <li v-for="user in $store.state.team" :key="user.id" class="flex flex-col gap-5 border-2 p-4 rounded-lg border-gray-300">
        <div class="flex flex-row gap-3 items-center justify-between h-10">
          <div class="flex flex-row gap-3 items-center">
            <svg class="h-8 w-8 stroke-2 stroke-secondary-dark" data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path>
            </svg>
            <h4 class="w-full line-clamp-1 h-6 font-semibold">{{ user.first_name + ' ' + user.last_name}}</h4>
          </div>
          <svg @click="fire_member(user.id)"  v-if="$store.state.user_ismanager" class="w-5 h-5 stroke-slate-500 cursor-pointer stroke-2" data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
          </svg>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios, { AxiosError } from 'axios';
export default {
  methods: {
    fire_member(id) {
      const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
      };
      axios.put(`${process.env.VUE_APP_API_BASE_URL}/firing?user_id=` + id,{}, {
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