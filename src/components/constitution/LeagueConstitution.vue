<template>
  <div class="league-constitution">
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
  </div>
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

<style lang="scss" scoped>
.league-constitution {
  box-shadow: 0 calcRems(4) calcRems(8) calcRems(4) gray;
  margin-top: calcRems(16);
}
</style>
