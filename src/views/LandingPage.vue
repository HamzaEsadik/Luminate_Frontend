<template>
  <header class="h-28 w-full px-8 md:px-16 flex flex-row justify-between items-center">
    <h1 class="logo cursor-pointer">Luminate</h1>
    <div class="hidden md:flex flex-row gap-5">
      <a href="/register" class="bg-white h-10 w-40 flex items-center justify-center hover:bg-secondary-dark hover:text-white cursor-pointer active:scale-95 rounded-lg text-primary text-base font-bold drop-shadow-button2">Register</a>
      <a href="/login" class="bg-white h-10 w-40 flex items-center justify-center hover:bg-secondary-dark hover:text-white cursor-pointer active:scale-95 rounded-lg text-primary text-base font-bold drop-shadow-button2">Login</a>
    </div>
  </header>
  <section class="w-full h-full md:py-28 px-8 md:px-16 flex flex-col md:flex-row gap-8 md:gap-20 overflow-x-hidden">
    <div class="h-full flex-1 flex flex-col gap-6 justify-center">
      <h1 class="text-md sm:text-5xl">Your Team's Success Starts Here!</h1>
      <h4 class="text-sm md:text-xl">Welcome to Luminate, where organizing, collaborating, and achieving your team's goals has never been easier. empowering your team to focus on what truly matters.</h4>
      <div class="flex flex-row gap-5">
        <a href="/login" class="bg-white h-10 w-40 flex items-center justify-center hover:bg-secondary-dark hover:text-white cursor-pointer active:scale-95 rounded-lg text-primary text-base font-bold drop-shadow-button2">Login</a>
        <button class="bg-white h-10 w-40 flex items-center justify-center hover:bg-secondary-dark hover:text-white cursor-pointer active:scale-95 rounded-lg text-base font-bold drop-shadow-button2" @click="$router.push({ name: 'register'})">Register</button>
      </div>
    </div>
    <div class="h-full flex-1 flex flex-col justify-center mb-10">
      <img src="../assets/images/hero.png" alt="hero image" class="md:scale-[1.3] origin-left md:translate-x-24 drop-shadow-img">
    </div>
  </section>
  <section class="w-full h-full px-8 md:px-16 flex flex-col justify-center py-12">
    <h3 class="text-sm md:text-lg text-black text-center font-semibold">With our intuitive web application, you'll streamline your project management processes, empowering your team to focus on what truly matters</h3>
  </section>
  <section class="w-full h-full px-8 md:px-16 flex flex-col gap-20">
    <div class="w-full h-full md:h-[400px] flex flex-col md:flex-row gap-6 md:gap-24">
      <div class="hidden flex-1 h-full md:flex flex-col justify-center p-4">
        <img src="../assets/images/projects.png" alt="" class="drop-shadow-img2">
      </div>
      <div class="flex-1 h-full flex flex-col justify-center gap-5">
        <h2>Projects Tracking</h2>
        <h3 class="text-secondary-dark text-xl font-normal">Keep all your projects on track with real-time updates, task assignments, and progress monitoring. Never lose sight of deadlines or milestones again.</h3>
      </div>
      <div class="md:hidden flex-1 h-full flex flex-col justify-center p-4">
        <img src="../assets/images/projects.png" alt="" class="drop-shadow-img2">
      </div>
    </div>
    <div class="w-full h-full md:h-[400px] flex flex-col md:flex-row gap-6 md:gap-24">
      <div class="flex-1 h-full flex flex-col justify-center gap-5">
        <h2>Meetings Management</h2>
        <h3 class="text-secondary-dark text-xl font-normal">Schedule, organize, and track meetings effortlessly. From setting agendas to assigning action items, our platform ensures every meeting is productive and purposeful.</h3>
      </div>
      <div class="flex-1 h-full flex flex-col justify-center p-4">
        <img src="../assets/images/meetings.png" alt="" class="drop-shadow-img2">
      </div>
    </div>
    <div class="w-full h-full md:h-[400px] flex flex-col md:flex-row gap-6 md:gap-24">
      <div class="hidden flex-1 h-full md:flex flex-col justify-center p-4">
        <img src="../assets/images/tasks.png" alt="" class="drop-shadow-img2">
      </div>
      <div class="flex-1 h-full flex flex-col justify-center gap-5">
        <h2>Tasks Management</h2>
        <h3 class="text-secondary-dark text-xl font-normal">Break down projects into manageable tasks, assign responsibilities, and track progress seamlessly. Our task management tools simplify collaboration and boost productivity.</h3>
      </div>
      <div class="md:hidden flex-1 h-full flex flex-col justify-center p-4">
        <img src="../assets/images/tasks.png" alt="" class="drop-shadow-img2">
      </div>
    </div>
  </section>
  <section class="w-full h-full md:h-[300px] px-8 md:px-16 py-12 flex flex-col justify-center items-center gap-5">
    <h2>Why Choose Us:</h2>
    <h3 class="text-secondary-dark text-center text-xl font-medium">Our platform offers a user-friendly interface designed for effortless adoption, scalability to accommodate teams of any size, seamless customization to align with your unique workflow, and unwavering reliability supported by a dedicated team. Whether you're a small startup or a large enterprise, our system grows with you, ensuring a smooth experience every step of the way.</h3>
  </section>
  <footer class="h-24 w-full px-8 md:px-16 flex flex-row justify-between items-center bg-slate-200">
    <h1 class="logo cursor-pointer">Luminate</h1>
    <div class="flex flex-row gap-5">
      <a class="h-10 flex items-center justify-center hover:text-black cursor-pointer active:scale-95 rounded-lg text-primary text-base font-bold drop-shadow-button2">Register</a>
      <a class="h-10 flex items-center justify-center hover:text-black cursor-pointer active:scale-95 rounded-lg text-primary text-base font-bold drop-shadow-button2">Login</a>
    </div>
  </footer>
</template>