import { createApp } from 'vue';
import App from '/src/App.vue';
import { createRouter } from './src/router'

const router = createRouter();

const app = createApp(App);
app.use(router);
app.mount('#app');

console.log("main.js run");
