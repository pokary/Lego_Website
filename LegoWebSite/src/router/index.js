import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: { render:()=>null } // Affiche rien au démarrage dans <router-view />
    },
    

  ]
})

export default router