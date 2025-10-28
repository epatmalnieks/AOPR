<template>
  <h1>Annexation of Puerto Rico</h1>
  <h2>Fantasy Football League Constitution</h2>
  <league-structure />
  <rosters />
  <scoring />
  <schedule />
  <playoffs />
  <finances />
  <draft />
  <player-transactions />
  <voting-records />
</template>

<script>
import Draft from './Draft.vue';
import Finances from './Finances.vue';
import LeagueStructure from './LeagueStructure.vue';
import PlayerTransactions from './PlayerTransactions.vue';
import Playoffs from './Playoffs.vue';
import Rosters from './Rosters.vue';
import Schedule from './Schedule.vue';
import Scoring from './Scoring.vue';
import VotingRecords from './VotingRecords.vue';

export default {
  components: {
    Draft,
    Finances,
    LeagueStructure,
    PlayerTransactions,
    Playoffs,
    Rosters,
    Schedule,
    Scoring,
    VotingRecords,
  },
};
</script>

<style scoped></style>
