<template>
  <h3>Finances</h3>
  <h4>Entry Fee</h4>
  <span>$100</span>
  <h4>Payouts</h4>
  <table class="finances-table">
    <tbody>
      <tr>
        <td>Super Bowl winner</td>
        <td>$500</td>
      </tr>
      <tr>
        <td>Super Bowl loser</td>
        <td>$250</td>
      </tr>
      <tr>
        <td>Most points at the end of the regular season</td>
        <td>$150</td>
      </tr>
      <tr>
        <td>Second most points at the end of the regular season</td>
        <td>$100</td>
      </tr>
      <tr>
        <td class="finances-total">Total</td>
        <td>$1,000</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
.finances-table {
  text-align: right;
}

.finances-total {
  font-weight: bold;
}
</style>
