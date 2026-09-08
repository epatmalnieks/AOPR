<template>
  <!-- <button @click="add5ToEachPlayer">Add $5 to each player</button>
  <pre v-for="roster in rosters" :key="roster.id">
    {{ roster }}
  </pre> -->

  <h3>2026 Draft Results</h3>
  <h4>Nomination Order / Divisions</h4>
  <div>
    <a href="#Adam">Adam</a>
  </div>
  <div>
    <a href="#Ryan">Ryan</a>
  </div>
  <div>
    <a href="#Wade">Wade</a>
  </div>
  <div>
    <a href="#Bill">Bill</a>
  </div>
  <div>
    <a href="#Mike">Mike</a>
  </div>
  <hr />
  <div>
    <a href="#Erik">Erik</a>
  </div>
  <div>
    <a href="#Paco">Paco</a>
  </div>
  <div>
    <a href="#Chad">Chad</a>
  </div>
  <div>
    <a href="#Kevin">Kevin</a>
  </div>
  <div>
    <a href="#Matt">Matt</a>
  </div>
  <div v-for="roster in rosters" :key="roster.id">
    <h5 :id="roster.owner">{{ roster.owner }}</h5>
    <div>
      <span>Salary Cap: ${{ roster.salaryCap }}</span>
    </div>
    <div>
      <span>Money Spent: ${{ getMoneySpent(roster) }}</span>
    </div>
    <div>
      <span>Carry Over: ${{ getCarryOver(roster) }}</span>
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
    this.getAdamRoster();
    this.getRyanRoster();
    this.getWadeRoster();
    this.getBillRoster();
    this.getMikeRoster();
    this.getErikRoster();
    this.getPacoRoster();
    this.getChadRoster();
    this.getKevinRoster();
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
          {
            name: 'Ashton Jeanty',
            position: 'RB',
            salary: 45,
          },
          {
            name: 'Puka Nacua',
            position: 'WR',
            salary: 56,
          },
          {
            name: 'Chris Olave',
            position: 'WR',
            salary: 45,
          },
          {
            name: 'Trey McBride',
            position: 'TE',
            salary: 33,
          },
          {
            name: 'Zay Flowers',
            position: 'FLEX',
            salary: 34,
          },
          {
            name: 'Bo Nix',
            position: 'OP',
            salary: 32,
          },
          {
            name: 'Eagles',
            position: 'D/ST',
            salary: 0,
          },
          {
            name: "Ka'imi Fairbairn",
            position: 'K',
            salary: 0,
          },
          {
            name: 'Bucky Irving',
            position: 'B',
            salary: 23,
          },
          {
            name: 'Makai Lemon',
            position: 'B',
            salary: 4,
          },
          {
            name: 'Jacory Croskey-Merritt',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Chris Rodriguez Jr.',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Romeo Doubs',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Rashid Shaheed',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Mike Washington Jr.',
            position: 'B',
            salary: 0,
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
          {
            name: "De'Von Achane",
            position: 'RB',
            salary: 42,
          },
          {
            name: 'Amon-Ra St. Brown',
            position: 'WR',
            salary: 64,
          },
          {
            name: 'CeeDee Lamb',
            position: 'WR',
            salary: 62,
          },
          {
            name: 'Mark Andrews',
            position: 'TE',
            salary: 4,
          },
          {
            name: 'RJ Harvey',
            position: 'FLEX',
            salary: 4,
          },
          {
            name: 'Patrick Mahomes',
            position: 'OP',
            salary: 23,
          },
          {
            name: 'Rams',
            position: 'D/ST',
            salary: 7,
          },
          {
            name: 'Brandon Aubrey',
            position: 'K',
            salary: 7,
          },
          {
            name: 'Rachaad White',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Jordan Addison',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Deebo Samuel',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Jake Ferguson',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Woody Marks',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Lions D/ST',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Jakobi Meyers',
            position: 'B',
            salary: 0,
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
            name: 'Jonathan Taylor',
            position: 'RB',
            salary: 55,
          },
          {
            name: 'Breece Hall',
            position: 'RB',
            salary: 31,
          },
          {
            name: 'Drake London',
            position: 'WR',
            salary: 56,
          },
          {
            name: 'Garrett Wilson',
            position: 'WR',
            salary: 40,
          },
          {
            isKeeper: true,
            name: 'Brock Bowers',
            position: 'TE',
            salary: 11,
          },
          {
            name: 'Jaylen Waddle',
            position: 'FLEX',
            salary: 29,
          },
          {
            name: 'Davante Adams',
            position: 'OP',
            salary: 24,
          },
          {
            name: 'Steelers',
            position: 'D/ST',
            salary: 2,
          },
          {
            name: 'Tyler Loop',
            position: 'K',
            salary: 0,
          },
          {
            name: 'Luther Burden III',
            position: 'B',
            salary: 15,
          },
          {
            name: 'Josh Jacobs',
            position: 'B',
            salary: 16,
          },
          {
            name: 'Aaron Jones Sr.',
            position: 'B',
            salary: 1,
          },
          {
            name: 'Xavier Worthy',
            position: 'B',
            salary: 2,
          },
          {
            name: 'Chuba Hubbard',
            position: 'B',
            salary: 2,
          },
          {
            name: 'Aaron Rodgers',
            position: 'B',
            salary: 0,
          },
          {
            name: 'KC Concepcion',
            position: 'B',
            salary: 1,
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
            name: 'Caleb Williams',
            position: 'QB',
            salary: 52,
          },
          {
            name: 'Chase Brown',
            position: 'RB',
            salary: 59,
          },
          {
            name: 'MarShawn Lloyd',
            position: 'RB',
            salary: 6,
          },
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
          {
            name: 'Colston Loveland',
            position: 'TE',
            salary: 45,
          },
          {
            name: 'Malik Nabers',
            position: 'FLEX',
            salary: 54,
          },
          {
            name: 'Dak Prescott',
            position: 'OP',
            salary: 36,
          },
          {
            name: 'Seahawks',
            position: 'D/ST',
            salary: 0,
          },
          {
            name: 'Jason Myers',
            position: 'K',
            salary: 1,
          },
          {
            name: 'Rico Dowdle',
            position: 'B',
            salary: 5,
          },
          {
            name: 'Matthew Golden',
            position: 'B',
            salary: 4,
          },
          {
            name: 'Jalen Coker',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Tyler Allgeier',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Tua Tagovailoa',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Juwan Johnson',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Brian Robinson Jr.',
            position: 'B',
            salary: 0,
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
            name: 'James Cook III',
            position: 'RB',
            salary: 81,
          },
          {
            name: 'Kyren Williams',
            position: 'RB',
            salary: 55,
          },
          {
            name: 'A.J. Brown',
            position: 'WR',
            salary: 62,
          },
          {
            name: 'George Pickens',
            position: 'WR',
            salary: 51,
          },
          {
            isKeeper: true,
            name: 'Tyler Warren',
            position: 'TE',
            salary: 14,
          },
          {
            name: 'Quentin Johnston',
            position: 'FLEX',
            salary: 5,
          },
          {
            name: 'Matthew Stafford',
            position: 'OP',
            salary: 21,
          },
          {
            name: 'Chiefs',
            position: 'D/ST',
            salary: 0,
          },
          {
            name: 'Chris Boswell',
            position: 'K',
            salary: 0,
          },
          {
            name: 'Isaiah Likely',
            position: 'B',
            salary: 4,
          },
          {
            name: 'Alec Pierce',
            position: 'B',
            salary: 12,
          },
          {
            name: 'Michael Pittman Jr.',
            position: 'B',
            salary: 5,
          },
          {
            name: 'Blake Corum',
            position: 'B',
            salary: 5,
          },
          {
            name: 'Daniel Jones',
            position: 'B',
            salary: 5,
          },
          {
            name: 'Kenny Gainwell',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Malik Willis',
            position: 'B',
            salary: 0,
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
            name: 'Saquon Barkley',
            position: 'RB',
            salary: 47,
          },
          {
            name: 'Jeremiyah Love',
            position: 'RB',
            salary: 36,
          },
          {
            isKeeper: true,
            name: 'Nico Collins',
            position: 'WR',
            salary: 15,
          },
          {
            name: 'Justin Jefferson',
            position: 'WR',
            salary: 59,
          },
          {
            name: 'George Kittle',
            position: 'TE',
            salary: 9,
          },
          {
            name: 'Tony Pollard',
            position: 'FLEX',
            salary: 12,
          },
          {
            name: 'Kyler Murray',
            position: 'OP',
            salary: 7,
          },
          {
            name: 'Texans',
            position: 'D/ST',
            salary: 4,
          },
          {
            name: 'Harrison Mevis',
            position: 'K',
            salary: 0,
          },
          {
            name: "De'Zhaun Stribling",
            position: 'B',
            salary: 4,
          },
          {
            name: 'DK Metcalf',
            position: 'B',
            salary: 11,
          },
          {
            name: 'Parker Washington',
            position: 'B',
            salary: 9,
          },
          {
            name: 'Quinshon Judkins',
            position: 'B',
            salary: 20,
          },
          {
            name: 'Jonathon Brooks',
            position: 'B',
            salary: 3,
          },
          {
            name: 'Michael Wilson',
            position: 'B',
            salary: 10,
          },
          {
            name: 'Jordan Love',
            position: 'B',
            salary: 6,
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
            name: 'Bijan Robinson',
            position: 'RB',
            salary: 70,
          },
          {
            name: 'Derrick Henry',
            position: 'RB',
            salary: 41,
          },
          {
            isKeeper: true,
            name: 'Jaxon Smith-Njigba',
            position: 'WR',
            salary: 12,
          },
          {
            name: 'Ladd McConkey',
            position: 'WR',
            salary: 33,
          },
          {
            name: 'Dallas Goedert',
            position: 'TE',
            salary: 3,
          },
          {
            name: 'Rome Odunze',
            position: 'FLEX',
            salary: 32,
          },
          {
            name: 'Brock Purdy',
            position: 'OP',
            salary: 20,
          },
          {
            name: 'Broncos',
            position: 'D/ST',
            salary: 4,
          },
          {
            name: 'Harrison Butker',
            position: 'K',
            salary: 0,
          },
          {
            name: 'David Montgomery',
            position: 'B',
            salary: 19,
          },
          {
            name: 'Jameson Williams',
            position: 'B',
            salary: 21,
          },
          {
            name: 'Courtland Sutton',
            position: 'B',
            salary: 9,
          },
          {
            name: 'Jaylen Warren',
            position: 'B',
            salary: 13,
          },
          {
            name: 'Brian Thomas Jr.',
            position: 'B',
            salary: 6,
          },
          {
            name: 'Dalton Kincaid',
            position: 'B',
            salary: 0,
          },
          {
            name: "Wan'Dale Robinson",
            position: 'B',
            salary: 0,
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
            salary: 72,
          },
          {
            isKeeper: true,
            name: 'Omarion Hampton',
            position: 'RB',
            salary: 48,
          },
          {
            name: "D'Andre Swift",
            position: 'RB',
            salary: 29,
          },
          {
            name: 'Tee Higgins',
            position: 'WR',
            salary: 28,
          },
          {
            name: 'Tetairoa McMillan',
            position: 'WR',
            salary: 37,
          },
          {
            isKeeper: true,
            name: 'Kyle Pitts',
            position: 'TE',
            salary: 5,
          },
          {
            name: 'Mike Evans',
            position: 'FLEX',
            salary: 15,
          },
          {
            name: 'Jalen Hurts',
            position: 'OP',
            salary: 40,
          },
          {
            name: 'Patriots',
            position: 'D/ST',
            salary: 0,
          },
          {
            name: 'Eddy Pineiro',
            position: 'K',
            salary: 0,
          },
          {
            name: 'Rhamondre Stevenson',
            position: 'B',
            salary: 10,
          },
          {
            name: 'J.K. Dobbins',
            position: 'B',
            salary: 8,
          },
          {
            name: 'Jodryn Tyson',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Tyler Shough',
            position: 'B',
            salary: 5,
          },
          {
            name: 'Kenyon Sadiq',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Stefon Diggs',
            position: 'B',
            salary: 1,
          },
          {
            name: 'Kyle Monangai',
            position: 'B',
            salary: 0,
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
            name: 'Jayden Daniels',
            position: 'QB',
            salary: 40,
          },
          {
            isKeeper: true,
            name: 'Travis Etienne',
            position: 'RB',
            salary: 6,
          },
          {
            name: 'Kenneth Walker III',
            position: 'RB',
            salary: 52,
          },
          {
            isKeeper: true,
            name: 'Jayden Reed',
            position: 'WR',
            salary: 8,
          },
          {
            name: 'Devonta Smith',
            position: 'WR',
            salary: 45,
          },
          {
            name: 'Tucker Kraft',
            position: 'TE',
            salary: 18,
          },
          {
            name: 'Jadarian Price',
            position: 'FLEX',
            salary: 22,
          },
          {
            name: 'Jaxson Dart',
            position: 'OP',
            salary: 23,
          },
          {
            name: 'Chargers',
            position: 'D/ST',
            salary: 0,
          },
          {
            name: 'Cameron Dicker',
            position: 'K',
            salary: 1,
          },
          {
            name: 'Terry McLaurin',
            position: 'B',
            salary: 28,
          },
          {
            name: 'Cam Ward',
            position: 'B',
            salary: 1,
          },
          {
            name: 'Carnell Tate',
            position: 'B',
            salary: 11,
          },
          {
            name: 'Fernando Mendoza',
            position: 'B',
            salary: 2,
          },
          {
            name: 'Marvin Harrison Jr.',
            position: 'B',
            salary: 10,
          },
          {
            name: 'Chris Godwin Jr.',
            position: 'B',
            salary: 4,
          },
          {
            name: 'Jordan Mason',
            position: 'B',
            salary: 5,
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
          {
            name: 'Christian McCaffrey',
            position: 'RB',
            salary: 55,
          },
          {
            name: 'Rashee Rice',
            position: 'WR',
            salary: 42,
          },
          {
            name: 'DJ Moore',
            position: 'WR',
            salary: 37,
          },
          {
            name: 'Sam LaPorta',
            position: 'TE',
            salary: 11,
          },
          {
            name: 'Bhayshul Tuten',
            position: 'FLEX',
            salary: 25,
          },
          {
            name: 'Josh Allen',
            position: 'OP',
            salary: 69,
          },
          {
            name: 'Ravens',
            position: 'D/ST',
            salary: 1,
          },
          {
            name: 'Cam Little',
            position: 'K',
            salary: 0,
          },
          {
            name: 'TreVeyon Henderson',
            position: 'B',
            salary: 18,
          },
          {
            name: 'Christian Watson',
            position: 'B',
            salary: 12,
          },
          {
            name: 'Sam Darnold',
            position: 'B',
            salary: 2,
          },
          {
            name: 'Harold Fannin Jr.',
            position: 'B',
            salary: 5,
          },
          {
            name: 'Denzel Boston',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Josh Downs',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Zachariah Branch',
            position: 'B',
            salary: 0,
          },
        ],
        salaryCap: 306,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
