import { createRouter as _createRouter, createWebHistory } from 'vue-router';

import HomePage from '../views/HomePage.vue';
import GamePage from '../views/GamePage.vue';
import UserLogin from '../views/UserLoginPage.vue';
import AddUser from '../views/AddUsersView.vue';

const routes = [
  {path: '/', name: 'HomePage', component: HomePage},
  {path: '/Game', name: 'GamePage', component: GamePage},
  {path: '/newUser', name: 'CreateNewUser', component: AddUser},
  {path: '/Login', name: 'UserLogin', component: UserLogin}

];

export function createRouter () {
  return _createRouter({
    history: createWebHistory(),
    routes: routes
  })
}