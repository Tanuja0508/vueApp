import { createApp } from 'vue'

import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'
import {createRouter, createWebHistory} from 'vue-router'  
import {routes} from './route.js'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')