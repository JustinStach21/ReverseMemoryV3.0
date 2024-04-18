import { createRouter as _createRouter, createWebHistory } from 'vue-router';

import HomePage from '../views/HomePage.vue';
import GamePage from '../views/GamePage.vue';

const routes = [
  {path: '/', name: 'HomePage', component: HomePage},
  {path: '/Game', name: 'GamePage', component: GamePage},

];

export function createRouter () {
  return _createRouter({
    history: createWebHistory(),
    routes: routes
  })
}