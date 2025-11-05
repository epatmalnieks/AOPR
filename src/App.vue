<template>
  <div class="app-container">
    <league-constitution />
  </div>
</template>

<script>
import LeagueConstitution from './components/constitution/LeagueConstitution.vue';

export default {
  components: {
    LeagueConstitution,
  },
};
</script>

<style lang="scss" scoped>
.app-container {
  font-family: 'Libre Baskerville', serif;
  margin: calcRems(8);
}
</style>
