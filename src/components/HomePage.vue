<template>
<div class=" w-full flex flex-col gap-6">
  <div class=" w-full h-14">
    <h1>Welcome Hamza!</h1>
  </div>
  <div class="bg-gree-300 w-full grid grid-cols-1 gap-6 md:grid-cols-2">
    <!--projects-->
    <div class="bg-secondary-light rounded-xl px-8 py-14 flex flex-col">
      <div class="h-20 flex flex-row justify-between">
        <h3>Projects</h3>
          <button class="text-sm w-44 font-medium">Add new project</button>
      </div>
      <ul class="grid grid-cols-1 gap-8">
        <li class="flex flex-col gap-5 border-2 p-4 rounded-lg border-gray-300 cursor-pointer">
          <div class="flex flex-row gap-3">
            <div class="h-5 w-full">
              <h5 class="line-clamp-1 font-semibold">Lorem Ipsum is simply</h5>
            </div>
          <div class="h-5 w-14 rounded-md bg-gray-300 shrink-0 flex flex-col justify-center">
            <p class="text-xs font-semibold">100%</p>
          </div>
          <div class="h-5 w-5 rounded-xl bg-red-500 shrink-0"></div>
          </div>
          <div>
            <p class="font-medium text-left text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </p>
          </div>
        </li>
        
      </ul>
    </div>

    <!--meetings-->
    <div class="bg-secondary-light rounded-xl px-8 py-14 flex flex-col cursor-pointer">
      <div class="h-20 flex flex-row justify-between">
        <h3>Upcoming meetings</h3>
          <button class="text-sm w-44 font-medium">Add new meeting</button>
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
          <div class="h-5 w-5 rounded-xl bg-red-500 shrink-0"></div>
        </li>
      </ul>
    </div>
    
    <!--tasks-->
    <div class="bg-secondary-light rounded-xl px-8 py-14 flex flex-col">
      <div class="h-20 flex flex-row justify-between">
        <h3>Tasks</h3>
          <button class="text-sm w-44 font-medium">Add new task</button>
      </div>
      <ul class="grid grid-cols-1 gap-8">
        <li class="flex flex-col gap-5 border-2 p-4 rounded-lg border-gray-300">
          <div class="flex flex-row gap-3">
            <div class="h-5 w-full">
              <h5 class="line-clamp-1 font-semibold">Lorem Ipsum is simply</h5>
            </div>
          <div class="h-5 w-5 rounded-xl bg-red-500 shrink-0"></div>
          </div>
          <div>
            <p class="font-medium text-left text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </p>
          </div>
          <div class="flex flex-row gap-2">
            <input type="checkbox" class="h-4 w-4" name="done">
            <label class="after:content-[''] after:ml-0.5 after:text-red-500;" for="done">done</label>
          </div>
        </li>
        <li class="flex flex-col gap-5 border-2 p-4 rounded-lg border-gray-300">
          <div class="flex flex-row gap-3">
            <div class="h-5 w-full">
              <h5 class="line-clamp-1 font-semibold">Lorem Ipsum is simply</h5>
            </div>
          <div class="h-5 w-5 rounded-xl bg-red-500 shrink-0"></div>
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
</div>
</template>