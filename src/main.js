import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueButtonYy from 'vue-button-yy'
import 'vue-button-yy/dist/style.css'
import 'vite-project/dist/style.css';
import 'my-vue-package/dist/style.css';



createApp(App).use(VueButtonYy).mount('#app');