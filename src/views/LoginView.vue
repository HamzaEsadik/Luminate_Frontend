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
        <input type="email" placeholder="type your email" v-model="user.email">
        <label for="password">password:</label>
        <input type="password" placeholder="type your password" v-model="user.password">
        <button type="submit" class="mt-5" @submit.prevent="login">Login</button>
      </form>
    </section>
  </div>
</template>
<script>
import axios from 'axios';
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
      axios.post('http://127.0.0.1:8000/api/login', this.user)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>