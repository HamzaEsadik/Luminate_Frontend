<template>
  <div class="h-16 w-full flex flex-col justify-center">
      <h1 class="logo mx-10 cursor-pointer">Luminate</h1>
  </div>
  
  <div class="h-full flex flex-col items-center py-24">
    <section class="h-fit w-full px-4 md:px-0 md:w-[500px] flex flex-col">
      <h1>Loging to your account</h1>
      <h5 class="mb-8 text-sm md:text-md">Don't have an account? <router-link to="/register" class="text-blue-700 cursor-pointer">register</router-link></h5>
      <form action="#" @submit.prevent="login">
        <label for="email">email:</label>
        <input type="email" placeholder="type your email" v-model="user.email" required>
        <label for="password">password:</label>
        <input type="password" placeholder="type your password" v-model="user.password" required>
        <button type="submit" class="mt-5" @submit.prevent="login">Login</button>
      </form>
    </section>
  </div>
</template>
<script>
import axios, { AxiosError } from 'axios';
export default {
  data() {
    return {
      'user': {
        'email': '',
        'password': ''
      }
    }
  },
  methods: {
    login() {
      axios.get(`${process.env.VUE_APP_API_URL}/sanctum/csrf-cookie`).then(response => {
        axios.post(`${process.env.VUE_APP_API_BASE_URL}/login`, this.user)
        .then(response => {
          localStorage.setItem("token", response.data.token);
          //store.state.token = response.data.token;
          this.$router.push({ name: 'dashboard' });
        })
        .catch(error => {
          console.log(error.response.data.message);
        });
      });
    }
  }
}
</script>