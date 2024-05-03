<template>
  <div class="h-16 w-full flex flex-col justify-center">
      <h1 class="logo mx-10 cursor-pointer">Luminate</h1>
  </div>
  <div class="h-full flex flex-col items-center py-24">
    <section class="h-fit w-[500px] flex flex-col">
      <h1>Create your account</h1>
      <h5 class="mb-8">Already have an account? <router-link to="/login" class="text-blue-700 cursor-pointer">Login</router-link></h5>
      <form action="#" @submit.prevent="register">

        <label>First name:</label>
        <input type="text" placeholder="type your first name" v-model="user.first_name">

        <label>Last name:</label>
        <input type="text" placeholder="type your last name" v-model="user.last_name">

        <label>Role:</label>
        <select name="role" id="role" v-model="user.is_manager">
          <option :value="true">Manager</option>
          <option :value="false">Employee</option>
        </select>

        <label v-if="user.is_manager">Company:</label>
        <input type="text" placeholder="type your company name" v-if="user.is_manager" v-model="user.name">

        <label>email:</label>
        <input type="email" placeholder="type your email" v-model="user.email">

        <label>password:</label>
        <input type="password" placeholder="type your password" v-model="user.password">

        <button type="submit" class="mt-5" @submit.prevent="register">Register</button>
      </form>
    </section>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      'user' : {
        'first_name': '',
        'last_name': '',
        'is_manager':false,
        'name': '',
        'email': '',
        'password': '',
      },
      'header': {
        'Accept': 'application/json',
      },
    }
  },
  methods: {
    register() {
      //console.log(this.user);
      axios.post('http://127.0.0.1:8000/api/register', this.user)
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