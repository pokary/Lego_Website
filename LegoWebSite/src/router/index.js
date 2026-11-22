import TheWelcome from '@/components/TheWelcome.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: { render:()=>null } // Affiche rien au démarrage dans <router-view />
    },
    {
        path:'/Welcome',
        name:'Welcome',
        component: TheWelcome
    }
  ]
})

export default router