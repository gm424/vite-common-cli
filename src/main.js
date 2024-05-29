import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';
import ArgonDashboard from './argon-dashboard';
import installlElement from './utils/element.js';
import '@/permission';
const appInstance = createApp(App);
installlElement(appInstance);
appInstance.use(store);
appInstance.use(router);

appInstance.use(ArgonDashboard);
appInstance.mount('#app');
