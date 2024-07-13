import { createRouter as _createRouter, createWebHistory } from 'vue-router';

import HomePage from '../views/HomePage.vue';
import GamePage from '../views/GamePage.vue';
import LevelsGamePage from '../views/LevelsGamePage.vue';
import EightColorGamePage from '../views/8ColorGamePage.vue'
import UserLogin from '../views/UserLoginPage.vue';
import AddUser from '../views/AddUsersView.vue';
import UserSettings from '../views/UserSettingsView.vue';
import LeaderBoards from '../views/LeaderBoards.vue';

const routes = [
  {path: '/', name: 'HomePage', component: HomePage},
  {path: '/Game', name: 'GamePage', component: GamePage},
  {path: '/LevelsMode', name: 'LevelsMode', component: LevelsGamePage},
  {path: '/eightColorsMode', name: '8GamePage', component: EightColorGamePage},
  {path: '/newUser', name: 'CreateNewUser', component: AddUser},
  {path: '/Login', name: 'UserLogin', component: UserLogin},
  {path: '/settings', name: 'UserSettings', component: UserSettings},
  {path: '/leaderboards', name: 'LeaderBoards', component: LeaderBoards}

];

export function createRouter () {
  return _createRouter({
    history: createWebHistory(),
    routes: routes
  })
}