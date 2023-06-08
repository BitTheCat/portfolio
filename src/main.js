import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import './style.css'

import App from './App.vue'

import HomepageInfo from './components/HomepageInfo.vue'
import TableShow from './components/TableShow.vue'

import '@bitthecat/tailwind-vue-data-table/dist/library.css'

const routes = [
  { path: '/', component: HomepageInfo },
  { path: '/tailwind-vue-table', component: TableShow }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App)
  .use(router)
  .mount('#app')
