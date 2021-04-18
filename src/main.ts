import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index'
// import elementUi from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'

createApp(App)
  .use(router)
  // .use(elementUi)
  .mount('#app')
