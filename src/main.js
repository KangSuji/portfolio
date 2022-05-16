import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import Scrollmagic from 'scrollmagic'

createApp(App)
  .use(router)
  .use(Scrollmagic)
  .mount('#app')
