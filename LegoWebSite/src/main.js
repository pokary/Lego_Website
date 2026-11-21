import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

import HomeView from './components/HomeView.vue'
import AboutView from './components/AboutView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView }
  ]
})

const app = createApp(App)

app.use(router)

app.mount('#app')