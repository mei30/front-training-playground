import './assets/base.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VeeValidation from '@/includes/validation'
import { auth } from '@/includes/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import router from '@/router/index'

import Icon from '@/directives/icon'

import App from './App.vue'

let app

onAuthStateChanged(auth, (user) => {
  if (!app) {
    app = createApp(App)
    app.use(createPinia())
    app.use(VeeValidation)
    app.use(router)

    app.directives('icon', Icon)

    app.mount('#app')
  }
})
