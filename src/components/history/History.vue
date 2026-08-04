<template>
  <div class="history-links">
    <router-link to="/draft-results-and-keepers">
      Draft Results & Keepers
    </router-link>
    <router-link to="/league-constitution">League Constitution</router-link>
  </div>
  <h1>Annexation of Puerto Rico</h1>
  <h2>History</h2>
  <select v-model="selectedYear">
    <option v-for="year in yearOptions" :value="year" :key="year">
      {{ year }}
    </option>
  </select>
  <draft-results-2025 v-if="selectedYear === 2025" />
  <draft-results-2026 v-if="selectedYear === 2026" />
</template>

<script>
import DraftResults2025 from './DraftResults2025.vue';
import DraftResults2026 from '../draftResultsAndKeepers/DraftResults2026.vue';

export default {
  components: {
    DraftResults2025,
    DraftResults2026,
  },

  data() {
    return {
      selectedYear: null,

      yearOptions: [2025, 2026],
    };
  },
};
</script>

<style lang="scss" scoped>
.history-links {
  display: flex;
  justify-content: space-between;
}
</style>
