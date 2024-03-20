import { createApp } from 'vue'
import App from './App.vue'
import router from "./components/VueRouter"
import store  from "./components/vuex"

createApp(App).use(router).use(store).mount('#app')
