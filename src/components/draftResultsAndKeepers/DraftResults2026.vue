<template>
  <!-- <button @click="add5ToEachPlayer">Add $5 to each player</button>
  <pre v-for="roster in rosters" :key="roster.id">
    {{ roster }}
  </pre> -->

  <h3>2026 Keeper Eligible Players</h3>
  <div v-for="roster in rosters" :key="roster.id">
    <h5 :id="roster.owner">{{ roster.owner }}</h5>
    <div>
      <span>Salary Cap: ${{ roster.salaryCap }}</span>
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
    this.getKevinRoster();
    this.getRyanRoster();
    this.getMikeRoster();
    this.getChadRoster();
    this.getErikRoster();
    this.getBillRoster();
    this.getAdamRoster();
    this.getPacoRoster();
    this.getWadeRoster();
    this.getMattRoster();
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

    getAdamRoster() {
      this.rosters.push({
        id: 1,
        owner: 'Adam',
        players: [
          {
            name: 'Jalen Hurts',
            position: 'QB',
            salary: 70,
          },
          {
            name: 'TreVeyon Henderson',
            position: 'RB',
            salary: 31,
          },
          {
            name: "De'Von Achane",
            position: 'RB',
            salary: 47,
          },
          {
            name: 'Malik Nabers',
            position: 'WR',
            salary: 47,
          },
          {
            name: 'Terry McLaurin',
            position: 'WR',
            salary: 20,
          },
          {
            name: 'George Kittle',
            position: 'TE',
            salary: 39,
          },
          {
            name: 'Alvin Kamara',
            position: 'FLEX',
            salary: 34,
          },
          {
            name: 'Justin Herbert',
            position: 'OP',
            salary: 21,
          },
          {
            name: 'Eagles',
            position: 'D/ST',
            salary: 5,
          },
          {
            name: 'Cameron Dicker',
            position: 'K',
            salary: 5,
          },
          {
            name: 'Caleb Williams',
            position: 'B',
            salary: 23,
          },
          {
            name: 'Jaylen Waddle',
            position: 'B',
            salary: 14,
          },
          {
            name: 'Rashid Shaheed',
            position: 'B',
            salary: 5,
          },
          {
            name: 'Javonte Williams',
            position: 'B',
            salary: 8,
          },
          {
            name: 'Quinshon Judkins',
            position: 'B',
            salary: 5,
          },
          {
            name: 'Darnell Mooney',
            position: 'B',
            salary: 5,
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
            name: 'Jordan Love',
            position: 'QB',
            salary: 17,
          },
          {
            name: 'Jahmyr Gibbs',
            position: 'RB',
            salary: 78,
          },
          {
            name: 'Derrick Henry',
            position: 'RB',
            salary: 62,
          },
          {
            name: 'CeeDee Lamb',
            position: 'WR',
            salary: 67,
          },
          {
            name: 'Mike Evans',
            position: 'WR',
            salary: 45,
          },
          {
            name: 'Chris Olave',
            position: 'FLEX',
            salary: 23,
          },
          {
            name: 'Baker Mayfield',
            position: 'OP',
            salary: 12,
          },
          {
            name: 'Jake Bates',
            position: 'K',
            salary: 8,
          },
          {
            name: 'Rashee Rice',
            position: 'B',
            salary: 7,
          },
          {
            name: 'Chris Godwin',
            position: 'B',
            salary: 5,
          },
          {
            name: 'Blake Corum',
            position: 'B',
            salary: 5,
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
            name: 'Saquon Barkley',
            position: 'RB',
            salary: 61,
          },
          {
            name: 'Puka Nacua',
            position: 'WR',
            salary: 56,
          },
          {
            name: 'Tee Higgins',
            position: 'WR',
            salary: 50,
          },
          {
            name: 'Brock Bowers',
            position: 'TE',
            salary: 11,
          },
          {
            name: 'Ricky Pearsall',
            position: 'FLEX',
            salary: 15,
          },
          {
            name: 'Brock Purdy',
            position: 'OP',
            salary: 41,
          },
          {
            name: 'Kenneth Walker',
            position: 'B',
            salary: 19,
          },
          {
            name: 'RJ Harvey',
            position: 'B',
            salary: 21,
          },
          {
            name: 'Deebo Samuel',
            position: 'B',
            salary: 12,
          },
          {
            name: 'Trevor Lawrence',
            position: 'B',
            salary: 9,
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
            name: 'Jayden Daniels',
            position: 'QB',
            salary: 37,
          },
          {
            name: 'Jonathan Taylor',
            position: 'RB',
            salary: 45,
          },
          {
            name: "Ja'Marr Chase",
            position: 'WR',
            salary: 25,
          },
          {
            name: 'Amon-Ra St. Brown',
            position: 'WR',
            salary: 71,
          },
          {
            name: 'Trey McBride',
            position: 'TE',
            salary: 50,
          },
          {
            name: 'Emeka Egbuka',
            position: 'FLEX',
            salary: 19,
          },
          {
            name: 'Dak Prescott',
            position: 'OP',
            salary: 45,
          },
          {
            name: 'Brandon Aubrey',
            position: 'K',
            salary: 8,
          },
          {
            name: 'Joe Mixon',
            position: 'B',
            salary: 9,
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
            name: 'CJ Stroud',
            position: 'QB',
            salary: 15,
          },
          {
            name: 'James Cook',
            position: 'RB',
            salary: 45,
          },
          {
            name: 'Jacory Croskey-Merritt',
            position: 'RB',
            salary: 21,
          },
          {
            name: 'Xavier Worthy',
            position: 'WR',
            salary: 29,
          },
          {
            name: 'Davante Adams',
            position: 'WR',
            salary: 55,
          },
          {
            name: 'DK Metcalf',
            position: 'FLEX',
            salary: 35,
          },
          {
            name: 'Patrick Mahomes',
            position: 'OP',
            salary: 40,
          },
          {
            name: 'Texans',
            position: 'D/ST',
            salary: 6,
          },
          {
            name: 'Stefon Diggs',
            position: 'B',
            salary: 11,
          },
          {
            name: 'Michael Pittman Jr',
            position: 'B',
            salary: 12,
          },
          {
            name: 'Dalton Kincaid',
            position: 'B',
            salary: 5,
          },
          {
            name: 'Tyler Warren',
            position: 'B',
            salary: 14,
          },
          {
            name: 'Daniel Jones',
            position: 'B',
            salary: 5,
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
            name: 'Lamar Jackson',
            position: 'QB',
            salary: 30,
          },
          {
            name: 'Bijan Robinson',
            position: 'RB',
            salary: 72,
          },
          {
            name: 'Josh Jacobs',
            position: 'RB',
            salary: 47,
          },
          {
            name: 'Nico Collins',
            position: 'WR',
            salary: 15,
          },
          {
            name: 'Garrett Wilson',
            position: 'WR',
            salary: 28,
          },
          {
            name: 'Travis Kelce',
            position: 'TE',
            salary: 24,
          },
          {
            name: 'Jameson Williams',
            position: 'OP',
            salary: 24,
          },
          {
            name: 'Zay Flowers',
            position: 'B',
            salary: 18,
          },
          {
            name: 'George Pickens',
            position: 'B',
            salary: 21,
          },
          {
            name: 'Devonta Smith',
            position: 'B',
            salary: 19,
          },
          {
            name: 'Michael Penix',
            position: 'B',
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
            name: 'Drake Maye',
            position: 'QB',
            salary: 30,
          },
          {
            name: 'Ashton Jeanty',
            position: 'RB',
            salary: 55,
          },
          {
            name: 'Bucky Irving',
            position: 'RB',
            salary: 55,
          },
          {
            name: 'Brian Thomas Jr',
            position: 'WR',
            salary: 14,
          },
          {
            name: 'Jaxon Smith-Njigba',
            position: 'WR',
            salary: 12,
          },
          {
            name: 'Justin Jefferson',
            position: 'FLEX',
            salary: 70,
          },
          {
            name: 'Breece Hall',
            position: 'OP',
            salary: 28,
          },
          {
            name: 'JJ McCarthy',
            position: 'B',
            salary: 12,
          },
          {
            name: 'Matthew Stafford',
            position: 'B',
            salary: 7,
          },
          {
            name: 'JK Dobbins',
            position: 'B',
            salary: 14,
          },
          {
            name: 'Dallas Goedert',
            position: 'B',
            salary: 5,
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
            name: 'Joe Burrow',
            position: 'QB',
            salary: 66,
          },
          {
            name: 'Christian McCafferey',
            position: 'RB',
            salary: 70,
          },
          {
            name: 'Omarion Hampton',
            position: 'RB',
            salary: 48,
          },
          {
            name: 'Drake London',
            position: 'WR',
            salary: 52,
          },
          {
            name: 'Marvin Harrison Jr',
            position: 'WR',
            salary: 35,
          },
          {
            name: "D'Andre Swift",
            position: 'FLEX',
            salary: 22,
          },
          {
            name: 'Jordan Addison',
            position: 'B',
            salary: 10,
          },
          {
            name: 'Kyle Pitts',
            position: 'B',
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
            name: 'Josh Allen',
            position: 'QB',
            salary: 68,
          },
          {
            name: 'Kyren Williams',
            position: 'RB',
            salary: 45,
          },
          {
            name: 'Aaron Jones',
            position: 'RB',
            salary: 27,
          },
          {
            name: 'AJ Brown',
            position: 'WR',
            salary: 52,
          },
          {
            name: 'TJ Hockenson',
            position: 'TE',
            salary: 11,
          },
          {
            name: 'DJ Moore',
            position: 'FLEX',
            salary: 36,
          },
          {
            name: 'Kyler Murray',
            position: 'OP',
            salary: 35,
          },
          {
            name: 'Jaylen Warren',
            position: 'B',
            salary: 8,
          },
          {
            name: 'Jayden Reed',
            position: 'B',
            salary: 8,
          },
          {
            name: 'Travis Etienne',
            position: 'B',
            salary: 6,
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
            name: 'Jared Goff',
            position: 'QB',
            salary: 23,
          },
          {
            name: 'Chase Brown',
            position: 'RB',
            salary: 50,
          },
          {
            name: 'Isaiah Pacheco',
            position: 'RB',
            salary: 25,
          },
          {
            name: 'Rome Odunze',
            position: 'WR',
            salary: 16,
          },
          {
            name: 'Courtland Sutton',
            position: 'WR',
            salary: 37,
          },
          {
            name: 'Sam LaPorta',
            position: 'TE',
            salary: 34,
          },
          {
            name: 'Ladd McConkey',
            position: 'FLEX',
            salary: 48,
          },
          {
            name: 'Bo Nix',
            position: 'OP',
            salary: 55,
          },
          {
            name: 'Vikings',
            position: 'D/ST',
            salary: 5,
          },
          {
            name: 'David Montgomery',
            position: 'B',
            salary: 20,
          },
          {
            name: 'Tetairoa McMillan',
            position: 'B',
            salary: 29,
          },
          {
            name: 'Zach Charbonnet',
            position: 'B',
            salary: 7,
          },
          {
            name: 'Jauan Jennings',
            position: 'B',
            salary: 6,
          },
          {
            name: 'Cam Skattebo',
            position: 'B',
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
