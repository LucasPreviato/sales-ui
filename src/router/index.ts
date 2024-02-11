import { createRouter, createWebHistory } from 'vue-router/auto'

import { setupLayouts } from 'virtual:generated-layouts'

import Dashboard from '@/pages/index.vue'

// Importar o componente da dashboard

// Configurar as rotas
const routes = [
  {
    path: '/', // Rota raiz
    Component: Dashboard
  },
  // {
  //   path: '/dashboard', // Rota da dashboard
  //   name: 'Dashboard',
  //   component: Dashboard
  // },
  // Outras rotas do seu aplicativo
]

// Criar o roteador
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  extendRoutes: setupLayouts,
  routes // Passar as rotas configuradas
})

export default router
