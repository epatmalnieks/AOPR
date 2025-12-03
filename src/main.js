import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import './styles/global.scss';

import LeagueConstitution from './components/constitution/LeagueConstitution.vue';
import Rosters from './components/rosters/Rosters.vue';

const routes = [
  {
    path: '/',
    redirect: '/league-constitution',
  },
  {
    component: LeagueConstitution,
    path: '/league-constitution',
  },
  {
    component: Rosters,
    path: '/rosters',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');
