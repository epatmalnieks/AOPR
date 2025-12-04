<template>
  <div class="rosters-link">
    <router-link to="/league-constitution">
      Go to League Constitution
    </router-link>
  </div>
  <h1>Annexation of Puerto Rico</h1>
  <h2>Draft Results and Keepers</h2>
  <draft-results-2025 />
</template>

<script>
import DraftResults2025 from './DraftResults2025.vue';

export default {
  components: {
    DraftResults2025,
  },
};
</script>

<style lang="scss" scoped>
.rosters-link {
  text-align: right;
}
</style>
