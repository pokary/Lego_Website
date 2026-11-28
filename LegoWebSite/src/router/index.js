import { createRouter, createWebHistory } from 'vue-router'
import Store from '../components/Store.vue'
import Command from '../components/Command.vue'
import Help from '../components/Help.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: { render:()=>null } // Affiche rien au démarrage dans <router-view />
    },
    { path: '/store', name: 'Store', component: Store}, 
    { path: '/command', name: 'Command', component: Command}, 
    { path: '/help', name: 'SAVpage', component: Help}
  ]
})

export default router