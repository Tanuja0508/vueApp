import { createApp } from 'vue'

import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'
import {createRouter, createWebHistory} from 'vue-router'  
import {routes} from './route.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
library.add(faSpinner)

  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  createApp(App).use(router).mount('#app')