import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import './styles/global.scss';

import DraftResultsAndKeepers from './components/draftResultsAndKeepers/DraftResultsAndKeepers.vue';
import History from './components/history/History.vue';
import LeagueConstitution from './components/constitution/LeagueConstitution.vue';

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
    component: DraftResultsAndKeepers,
    path: '/draft-results-and-keepers',
  },
  {
    component: History,
    path: '/history',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');
