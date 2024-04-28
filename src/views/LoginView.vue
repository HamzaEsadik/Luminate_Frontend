<template>
  
  <div class="h-screen flex flex-col justify-center items-center relative">
    <div class="h-16 w-full flex flex-col justify-center absolute top-0">
    <h1 class="logo mx-10 cursor-pointer">Luminate</h1>
  </div>
    <section class="h-fit w-96 flex flex-col">
      <h1>Loging to your account</h1>
      <h5 class="mb-8">Don't have an account? <router-link to="/register" class="text-blue-700 cursor-pointer">register</router-link></h5>
      <form action="#" method="POST">
        <label for="email">email:</label>
        <input type="email" placeholder="type your email">
        <label for="password">password:</label>
        <input type="password" placeholder="type your password">
        <button class="mt-5">login</button>
      </form>
    </section>
  </div>
</template>