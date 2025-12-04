<template>
  <div class="draft-results-and-keepers-links">
    <!-- <router-link to="/history">History</router-link> -->
    <router-link to="/league-constitution">League Constitution</router-link>
  </div>
  <h1>Annexation of Puerto Rico</h1>
  <h2>Draft Results & Keepers</h2>
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
.draft-results-and-keepers-links {
  // display: flex;
  // justify-content: space-between;
  text-align: right;
}
</style>
