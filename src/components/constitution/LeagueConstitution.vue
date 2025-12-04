<template>
  <div class="league-constitution">
    <div class="league-constitution-link">
      <router-link to="/draft-results-and-keepers">
        Draft Results & Keepers
      </router-link>
    </div>
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
@use '../../styles/_variables' as *;

.league-constitution {
  box-shadow: 0 calcRems(4) calcRems(8) calcRems(4) $gray;
  margin: calcRems(8);
  padding: calcRems(16) calcRems(8);
}

.league-constitution-link {
  text-align: right;
}
</style>
