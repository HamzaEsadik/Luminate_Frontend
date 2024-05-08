<template>
  <div class="h-16 w-full flex flex-col justify-center">
      <h1 class="logo mx-10 cursor-pointer">Luminate</h1>
  </div>
  
  <div class="h-full flex flex-col items-center py-24">
    <section class="h-fit w-[500px] flex flex-col">
      <h1>Loging to your account</h1>
      <h5 class="mb-8">Don't have an account? <router-link to="/register" class="text-blue-700 cursor-pointer">register</router-link></h5>
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
      axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(response => {
        axios.post('http://127.0.0.1:8000/api/login', this.user)
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