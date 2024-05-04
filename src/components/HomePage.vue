<template>
<div class=" w-full h-14">
  <h1>Welcome Hamza!</h1>
</div>
<div class="px-8 w-full h-10 bg-green-400 rounded-xl flex flex-row justify-between items-center">
  <h5>Company invited you to join there team</h5>
  <div class="flex flex-row gap-4">
    <svg class="z-30 w-5 h-5 stroke-black cursor-pointer stroke-2" data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
    </svg>
    <svg class="z-30 w-5 h-5 stroke-black cursor-pointer stroke-2" data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" >
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
    </svg>
  </div>
</div>
<div class="w-full grid grid-cols-1 gap-6 md:grid-cols-2">
  <!--projects-->
  <div class="bg-secondary-light rounded-xl px-8 py-14 flex flex-col">
    <div class="h-20 flex flex-row justify-between">
      <h3>Projects</h3>
        <button class="text-sm w-44 font-medium" @click="this.$store.commit('open_project')">Add new project</button>
    </div>
    <ul class="grid grid-cols-1 gap-8">
      <label class="has-[:checked]:border-primary flex flex-col gap-5 border-2 p-4 rounded-lg border-gray-300 cursor-pointer after:content-[''] after:ml-0.5 text-center">
        <input type="radio" name="option" class="hidden form-checkbox h-5 w-5 text-indigo-600" checked>
        <div class="flex flex-row gap-3">
          <div class="h-5 w-full">
            <h5 class="line-clamp-1 font-semibold">Lorem Ipsum is simply</h5>
          </div>
        <div class="h-5 w-14 rounded-md bg-gray-300 shrink-0 flex flex-col justify-center">
          <p class="text-xs font-semibold">100%</p>
        </div>
        <svg class="z-30 w-5 h-5 stroke-slate-500 cursor-pointer stroke-2" data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
        </svg>
        </div>
        <div>
          <p class="font-medium text-left text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </p>
        </div>
      </label>
      
    </ul>
  </div>

  <!--meetings-->
  <div class="bg-secondary-light rounded-xl px-8 py-14 flex flex-col cursor-pointer">
    <div class="h-20 flex flex-row justify-between">
      <h3>Upcoming meetings</h3>
        <button class="text-sm w-44 font-medium" @click="this.$store.commit('open_meeting')">Add new meeting</button>
    </div>
    <ul class="grid grid-cols-1 gap-8">
      <li class="flex flex-row gap-3">
        <div class="h-14 w-14 rounded-xl bg-white shrink-0 flex flex-col">
          <div class="w-full h-4 rounded-t-xl bg-secondary-dark">
            <p class="text-white text-xs">apr</p>
          </div>
          <div class="w-full h-full rounded-b-xl flex flex-col justify-center">
            <p class="text-2xl font-bold text-primary h-fit">25</p>
          </div>
        </div>
        <div class="h-14 w-full">
          <h5 class="line-clamp-1">Lorem Ipsum is simply dummy text of the printing printing printing printing</h5>
          <h5 class="text-sm text-slate-500">03:45 pm</h5>
        </div>
        <svg class="z-30 w-5 h-5 stroke-slate-500 cursor-pointer stroke-2" data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
        </svg>
      </li>
    </ul>
  </div>
  
  <!--tasks-->
  <div class="bg-secondary-light rounded-xl px-8 py-14 flex flex-col">
    <div class="h-20 flex flex-row justify-between">
      <h3>Tasks</h3>
        <button class="text-sm w-44 font-medium" @click="this.$store.commit('open_task')">Add new task</button>
    </div>
    <select name="user" id="user" class="h-14 text-lg bg-secondary-light border-gray-300 active:border-gray-300">
      <option :value="user1">User1</option>
    </select>
    <ul class="grid grid-cols-1 gap-8">
      <li class="flex flex-col gap-5 border-2 p-4 rounded-lg border-gray-300">
        <div class="flex flex-row gap-3">
          <div class="h-5 w-full">
            <h5 class="line-clamp-1 font-semibold">Lorem Ipsum is simply</h5>
          </div>
          <svg class="z-30 w-5 h-5 stroke-slate-500 cursor-pointer stroke-2" data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
          </svg>
        </div>
        <div>
          <p class="font-medium text-left text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </p>
        </div>
        <div class="flex flex-row gap-2">
          <input type="checkbox" class="h-4 w-4" name="done">
          <label class="after:content-[''] after:ml-0.5 after:text-red-500;" for="done">done</label>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
</script>