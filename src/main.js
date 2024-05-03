import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import HomePage from './components/HomePage.vue';

const app = createApp(App);
app.component('home-page', HomePage);
app.use(store).use(router).mount('#app')
