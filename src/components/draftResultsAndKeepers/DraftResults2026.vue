<template>
  <!-- <button @click="add5ToEachPlayer">Add $5 to each player</button>
  <pre v-for="roster in rosters" :key="roster.id">
    {{ roster }}
  </pre> -->

  <h3>2026 Draft Results</h3>
  <div v-for="roster in rosters" :key="roster.id">
    <h5 :id="roster.owner">{{ roster.owner }}</h5>
    <div>
      <span>Starting Salary Cap: ${{ roster.salaryCap }}</span>
    </div>
    <div>
      <span>Remaining Salary: ${{ calculateRemainingSalary(roster) }}</span>
    </div>
    <table>
      <thead>
        <tr>
          <th>Position</th>
          <th>Player</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="player in roster.players"
          :key="player.name"
          :class="getRowClass(player)"
        >
          <td>{{ player.position }}</td>
          <td>
            {{ player.name }}
            <span class="draft-results-keeper" v-if="player.isKeeper">
              - Keeper
            </span>
          </td>
          <td>${{ player.salary }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rosters: [],
    };
  },

  mounted() {
    this.getBillRoster();
    this.getMikeRoster();
    this.getErikRoster();
    this.getAdamRoster();
    this.getWadeRoster();
    this.getRyanRoster();
    this.getChadRoster();
    this.getMattRoster();
    this.getPacoRoster();
    this.getKevinRoster();
  },

  methods: {
    add5ToEachPlayer() {
      this.rosters = this.rosters.map((roster) => {
        return {
          ...roster,
          players: roster.players.map((player) => {
            return {
              ...player,
              salary: player.salary + 5,
            };
          }),
        };
      });
    },

    calculateRemainingSalary(roster) {
      return (
        roster.salaryCap -
        roster.players.reduce((total, player) => total + player.salary, 0)
      );
    },

    getAdamRoster() {
      this.rosters.push({
        id: 1,
        owner: 'Adam',
        players: [
          {
            isKeeper: true,
            name: 'Justin Herbert',
            position: 'QB',
            salary: 21,
          },
          {
            isKeeper: true,
            name: 'Javonte Williams',
            position: 'RB',
            salary: 8,
          },
        ],
        salaryCap: 301,
      });
    },

    getBillRoster() {
      this.rosters.push({
        id: 2,
        owner: 'Bill',
        players: [
          {
            isKeeper: true,
            name: 'Baker Mayfield',
            position: 'QB',
            salary: 12,
          },
          {
            isKeeper: true,
            name: 'Jahmyr Gibbs',
            position: 'RB',
            salary: 78,
          },
        ],
        salaryCap: 303,
      });
    },

    getCarryOver(roster) {
      return roster.salaryCap - this.getMoneySpent(roster);
    },

    getChadRoster() {
      this.rosters.push({
        id: 3,
        owner: 'Chad',
        players: [
          {
            isKeeper: true,
            name: 'Trevor Lawrence',
            position: 'QB',
            salary: 9,
          },
          {
            isKeeper: true,
            name: 'Brock Bowers',
            position: 'TE',
            salary: 11,
          },
        ],
        salaryCap: 304,
      });
    },

    getErikRoster() {
      this.rosters.push({
        id: 4,
        owner: 'Erik',
        players: [
          {
            isKeeper: true,
            name: "Ja'Marr Chase",
            position: 'WR',
            salary: 25,
          },
          {
            isKeeper: true,
            name: 'Emeka Egbuka',
            position: 'WR',
            salary: 19,
          },
        ],
        salaryCap: 306,
      });
    },

    getKevinRoster() {
      this.rosters.push({
        id: 5,
        owner: 'Kevin',
        players: [
          {
            isKeeper: true,
            name: 'CJ Stroud',
            position: 'QB',
            salary: 15,
          },
          {
            isKeeper: true,
            name: 'Tyler Warren',
            position: 'TE',
            salary: 14,
          },
        ],
        salaryCap: 350,
      });
    },

    getMattRoster() {
      this.rosters.push({
        id: 6,
        owner: 'Matt',
        players: [
          {
            isKeeper: true,
            name: 'Lamar Jackson',
            position: 'QB',
            salary: 30,
          },
          {
            isKeeper: true,
            name: 'Nico Collins',
            position: 'WR',
            salary: 15,
          },
        ],
        salaryCap: 314,
      });
    },

    getMikeRoster() {
      this.rosters.push({
        id: 7,
        owner: 'Mike',
        players: [
          {
            isKeeper: true,
            name: 'Drake Maye',
            position: 'QB',
            salary: 30,
          },
          {
            isKeeper: true,
            name: 'Jaxon Smith-Njigba',
            position: 'WR',
            salary: 12,
          },
        ],
        salaryCap: 347,
      });
    },

    getMoneySpent(roster) {
      return roster.players.reduce((total, player) => {
        return total + player.salary;
      }, 0);
    },

    getPacoRoster() {
      this.rosters.push({
        id: 8,
        owner: 'Paco',
        players: [
          {
            isKeeper: true,
            name: 'Omarion Hampton',
            position: 'RB',
            salary: 48,
          },
          {
            isKeeper: true,
            name: 'Kyle Pitts',
            position: 'TE',
            salary: 5,
          },
        ],
        salaryCap: 300,
      });
    },

    getRowClass(player) {
      return player.isKeeperEligible ? 'draft-results-keeper-eligible' : '';
    },

    getRyanRoster() {
      this.rosters.push({
        id: 9,
        owner: 'Ryan',
        players: [
          {
            isKeeper: true,
            name: 'Travis Etienne',
            position: 'RB',
            salary: 6,
          },
          {
            isKeeper: true,
            name: 'Jayden Reed',
            position: 'WR',
            salary: 8,
          },
        ],
        salaryCap: 302,
      });
    },

    getWadeRoster() {
      this.rosters.push({
        id: 10,
        owner: 'Wade',
        players: [
          {
            isKeeper: true,
            name: 'Jared Goff',
            position: 'QB',
            salary: 23,
          },
          {
            isKeeper: true,
            name: 'Cam Skattebo',
            position: 'RB',
            salary: 6,
          },
        ],
        salaryCap: 306,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
