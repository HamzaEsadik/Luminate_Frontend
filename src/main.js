import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import HomePage from './components/HomePage.vue';
import TeamPage from './components/TeamPage.vue';
import CreateMeeting from './components/CreateMeeting.vue';
import CreateProject from './components/CreateProject.vue';
import CreateTask from './components/CreateTask.vue';
import AddMember from './components/AddMember.vue';

const app = createApp(App);
app.component('home-page', HomePage);
app.component('team-page', TeamPage);
app.component('create-meeting', CreateMeeting);
app.component('create-project', CreateProject);
app.component('create-task', CreateTask);
app.component('add-member', AddMember);

app.use(store).use(router).mount('#app')
