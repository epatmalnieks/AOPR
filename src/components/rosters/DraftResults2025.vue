<template>
  <h3>2025 Draft Results</h3>
  <h4>Nomination Order / Divisions</h4>
  <div>
    <a href="#Kevin">Kevin</a>
  </div>
  <div>
    <a href="#Ryan">Ryan</a>
  </div>
  <div>
    <a href="#Mike">Mike</a>
  </div>
  <div>
    <a href="#Chad">Chad</a>
  </div>
  <div>
    <a href="#Erik">Erik</a>
  </div>
  <hr></hr>
  <div>
    <a href="#Bill">Bill</a>
  </div>
  <div>
    <a href="#Adam">Adam</a>
  </div>
  <div>
    <a href="#Paco">Paco</a>
  </div>
  <div>
    <a href="#Wade">Wade</a>
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
        <tr v-for="player in roster.players" :key="player.name">
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
    getAdamRoster() {
      this.rosters.push({
        id: 1,
        owner: 'Adam',
        players: [
          {
            name: 'Jalen Hurts',
            position: 'QB',
            salary: 65,
          },
          {
            name: 'TreVeyon Henderson',
            position: 'RB',
            salary: 26,
          },
          {
            name: "De'Von Achane",
            position: 'RB',
            salary: 42,
          },
          {
            isKeeper: true,
            name: 'Malik Nabers',
            position: 'WR',
            salary: 42,
          },
          {
            isKeeper: true,
            name: 'Terry McLaurin',
            position: 'WR',
            salary: 15,
          },
          {
            name: 'George Kittle',
            position: 'TE',
            salary: 34,
          },
          {
            name: 'Alvin Kamara',
            position: 'FLEX',
            salary: 29,
          },
          {
            name: 'Justin Herbert',
            position: 'OP',
            salary: 16,
          },
          {
            name: 'Eagles',
            position: 'D/ST',
            salary: 0,
          },
          {
            name: 'Cameron Dicker',
            position: 'K',
            salary: 0,
          },
          {
            name: 'Caleb Williams',
            position: 'B',
            salary: 18,
          },
          {
            name: 'Jaylen Waddle',
            position: 'B',
            salary: 9,
          },
          {
            name: 'Rashid Shaheed',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Javonte Williams',
            position: 'B',
            salary: 3,
          },
          {
            name: 'Christian Kirk',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Quinshon Judkins',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Darnell Mooney',
            position: 'B',
            salary: 0,
          },
        ],
        salaryCap: 300,
      });
    },

    getBillRoster() {
      this.rosters.push({
        id: 2,
        owner: 'Bill',
        players: [
          {
            isKeeper: true,
            name: 'Jordan Love',
            position: 'QB',
            salary: 12,
          },
          {
            name: 'Jahmyr Gibbs',
            position: 'RB',
            salary: 73,
          },
          {
            name: 'Derrick Henry',
            position: 'RB',
            salary: 57,
          },
          {
            name: 'CeeDee Lamb',
            position: 'WR',
            salary: 62,
          },
          {
            name: 'Mike Evans',
            position: 'WR',
            salary: 40,
          },
          {
            name: 'Mark Andrews',
            position: 'TE',
            salary: 18,
          },
          {
            name: 'Chris Olave',
            position: 'FLEX',
            salary: 18,
          },
          {
            isKeeper: true,
            name: 'Baker Mayfield',
            position: 'OP',
            salary: 7,
          },
          {
            name: 'Ravens',
            position: 'D/ST',
            salary: 0,
          },
          {
            name: 'Jake Bates',
            position: 'K',
            salary: 3,
          },
          {
            name: 'Cooper Kupp',
            position: 'B',
            salary: 4,
          },
          {
            name: 'Rashee Rice',
            position: 'B',
            salary: 2,
          },
          {
            name: 'Cade Otton',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Packers',
            position: 'B',
            salary: 1,
          },
          {
            name: 'Chris Godwin',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Jalen Milroe',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Blake Corum',
            position: 'B',
            salary: 0,
          },
        ],
        salaryCap: 300,
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
            name: 'Geno Smith',
            position: 'QB',
            salary: 17,
          },
          {
            isKeeper: true,
            name: 'Saquon Barkley',
            position: 'RB',
            salary: 56,
          },
          {
            name: 'Chuba Hubbard',
            position: 'RB',
            salary: 33,
          },
          {
            name: 'Puka Nacua',
            position: 'WR',
            salary: 51,
          },
          {
            name: 'Tee Higgins',
            position: 'WR',
            salary: 45,
          },
          {
            isKeeper: true,
            name: 'Brock Bowers',
            position: 'TE',
            salary: 6,
          },
          {
            name: 'Ricky Pearsall',
            position: 'FLEX',
            salary: 10,
          },
          {
            name: 'Brock Purdy',
            position: 'OP',
            salary: 36,
          },
          {
            name: 'Chargers',
            position: 'D/ST',
            salary: 0,
          },
          {
            name: 'Evan McPherson',
            position: 'K',
            salary: 0,
          },
          {
            name: 'Kenneth Walker',
            position: 'B',
            salary: 14,
          },
          {
            name: 'RJ Harvey',
            position: 'B',
            salary: 16,
          },
          {
            name: 'Deebo Samuel',
            position: 'B',
            salary: 7,
          },
          {
            name: 'Tucker Kraft',
            position: 'B',
            salary: 1,
          },
          {
            name: 'Trevor Lawrence',
            position: 'B',
            salary: 4,
          },
          {
            name: 'Kaleb Johnson',
            position: 'B',
            salary: 2,
          },
          {
            name: 'Josh Downs',
            position: 'B',
            salary: 2,
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
            name: 'Jayden Daniels',
            position: 'QB',
            salary: 32,
          },
          {
            name: 'Jonathan Taylor',
            position: 'RB',
            salary: 40,
          },
          {
            name: 'Nick Chubb',
            position: 'RB',
            salary: 2,
          },
          {
            isKeeper: true,
            name: "Ja'Marr Chase",
            position: 'WR',
            salary: 20,
          },
          {
            name: 'Amon-Ra St. Brown',
            position: 'WR',
            salary: 66,
          },
          {
            name: 'Trey McBride',
            position: 'TE',
            salary: 45,
          },
          {
            name: 'Emeka Egbuka',
            position: 'FLEX',
            salary: 14,
          },
          {
            name: 'Dak Prescott',
            position: 'OP',
            salary: 40,
          },
          {
            name: 'Broncos',
            position: 'D/ST',
            salary: 4,
          },
          {
            name: 'Brandon Aubrey',
            position: 'K',
            salary: 3,
          },
          {
            name: 'Keon Coleman',
            position: 'B',
            salary: 4,
          },
          {
            name: 'Matthew Golden',
            position: 'B',
            salary: 14,
          },
          {
            name: 'Bryce Young',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Brenton Strange',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Isacc TeSlaa',
            position: 'B',
            salary: 6,
          },
          {
            name: 'Braelon Allen',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Joe Mixon',
            position: 'B',
            salary: 4,
          },
        ],
        salaryCap: 300,
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
            salary: 10,
          },
          {
            name: 'James Cook',
            position: 'RB',
            salary: 40,
          },
          {
            name: 'Jacory Croskey-Merritt',
            position: 'RB',
            salary: 16,
          },
          {
            isKeeper: true,
            name: 'Xavier Worthy',
            position: 'WR',
            salary: 24,
          },
          {
            name: 'Davante Adams',
            position: 'WR',
            salary: 50,
          },
          {
            name: 'Colston Loveland',
            position: 'TE',
            salary: 10,
          },
          {
            name: 'DK Metcalf',
            position: 'FLEX',
            salary: 30,
          },
          {
            name: 'Patrick Mahomes',
            position: 'OP',
            salary: 35,
          },
          {
            name: 'Texans',
            position: 'D/ST',
            salary: 1,
          },
          {
            name: 'Chris Boswell',
            position: 'K',
            salary: 0,
          },
          {
            name: 'Travis Hunter',
            position: 'B',
            salary: 10,
          },
          {
            name: 'Stefon Diggs',
            position: 'B',
            salary: 6,
          },
          {
            name: 'Michael Pittman Jr',
            position: 'B',
            salary: 7,
          },
          {
            name: 'Tank Bigsby',
            position: 'B',
            salary: 2,
          },
          {
            name: 'Dalton Kincaid',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Tyler Warren',
            position: 'B',
            salary: 9,
          },
          {
            name: 'Daniel Jones',
            position: 'B',
            salary: 0,
          },
        ],
        salaryCap: 300,
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
            salary: 25,
          },
          {
            name: 'Bijan Robinson',
            position: 'RB',
            salary: 67,
          },
          {
            name: 'Josh Jacobs',
            position: 'RB',
            salary: 42,
          },
          {
            isKeeper: true,
            name: 'Nico Collins',
            position: 'WR',
            salary: 10,
          },
          {
            name: 'Garrett Wilson',
            position: 'WR',
            salary: 23,
          },
          {
            name: 'Travis Kelce',
            position: 'TE',
            salary: 19,
          },
          {
            name: 'James Connor',
            position: 'FLEX',
            salary: 21,
          },
          {
            name: 'Jameson Williams',
            position: 'OP',
            salary: 19,
          },
          {
            name: 'Steelers',
            position: 'D/ST',
            salary: 0,
          },
          {
            name: 'Chase McLaughlin',
            position: 'K',
            salary: 1,
          },
          {
            name: 'Zay Flowers',
            position: 'B',
            salary: 13,
          },
          {
            name: 'George Pickens',
            position: 'B',
            salary: 16,
          },
          {
            name: 'Tony Pollard',
            position: 'B',
            salary: 14,
          },
          {
            name: 'Devonta Smith',
            position: 'B',
            salary: 14,
          },
          {
            name: 'Michael Penix',
            position: 'B',
            salary: 10,
          },
          {
            name: 'Jerry Jeudy',
            position: 'B',
            salary: 4,
          },
          {
            name: 'Khalil Shakir',
            position: 'B',
            salary: 0,
          },
        ],
        salaryCap: 312,
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
            salary: 25,
          },
          {
            name: 'Ashton Jeanty',
            position: 'RB',
            salary: 50,
          },
          {
            name: 'Bucky Irving',
            position: 'RB',
            salary: 50,
          },
          {
            isKeeper: true,
            name: 'Brian Thomas Jr',
            position: 'WR',
            salary: 9,
          },
          {
            isKeeper: true,
            name: 'Jaxon Smith-Njigba',
            position: 'WR',
            salary: 7,
          },
          {
            name: 'David Njoku',
            position: 'TE',
            salary: 4,
          },
          {
            name: 'Justin Jefferson',
            position: 'FLEX',
            salary: 65,
          },
          {
            name: 'Breece Hall',
            position: 'OP',
            salary: 23,
          },
          {
            name: 'Patriots',
            position: 'D/ST',
            salary: 0,
          },
          {
            name: 'Jake Elliott',
            position: 'K',
            salary: 0,
          },
          {
            name: 'JJ McCarthy',
            position: 'B',
            salary: 7,
          },
          {
            name: 'Calvin Ridley',
            position: 'B',
            salary: 16,
          },
          {
            name: 'Jakobi Meyers',
            position: 'B',
            salary: 3,
          },
          {
            name: 'Jordan Mason',
            position: 'B',
            salary: 11,
          },
          {
            name: 'Matthew Stafford',
            position: 'B',
            salary: 2,
          },
          {
            name: 'JK Dobbins',
            position: 'B',
            salary: 9,
          },
          {
            name: 'Dallas Goedert',
            position: 'B',
            salary: 0,
          },
        ],
        salaryCap: 328,
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
            name: 'Joe Burrow',
            position: 'QB',
            salary: 61,
          },
          {
            name: 'Christian McCafferey',
            position: 'RB',
            salary: 65,
          },
          {
            name: 'Omarion Hampton',
            position: 'RB',
            salary: 43,
          },
          {
            name: 'Drake London',
            position: 'WR',
            salary: 47,
          },
          {
            name: 'Marvin Harrison Jr',
            position: 'WR',
            salary: 30,
          },
          {
            name: 'Evan Engram',
            position: 'TE',
            salary: 11,
          },
          {
            name: "D'Andre Swift",
            position: 'FLEX',
            salary: 17,
          },
          {
            name: 'Justin Fields',
            position: 'OP',
            salary: 17,
          },
          {
            name: 'Lions',
            position: 'D/ST',
            salary: 0,
          },
          {
            name: 'Wil Lutz',
            position: 'K',
            salary: 0,
          },
          {
            name: 'Jordan Addison',
            position: 'B',
            salary: 5,
          },
          {
            name: 'Brian Robinson Jr',
            position: 'B',
            salary: 2,
          },
          {
            name: 'Austin Ekeler',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Keenan Allen',
            position: 'B',
            salary: 2,
          },
          {
            name: 'Kyle Pitts',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Jayden Higgins',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Tua Tagovailoa',
            position: 'B',
            salary: 0,
          },
        ],
        salaryCap: 300,
      });
    },

    getRyanRoster() {
      this.rosters.push({
        id: 9,
        owner: 'Ryan',
        players: [
          {
            isKeeper: true,
            name: 'Josh Allen',
            position: 'QB',
            salary: 63,
          },
          {
            name: 'Kyren Williams',
            position: 'RB',
            salary: 40,
          },
          {
            name: 'Aaron Jones',
            position: 'RB',
            salary: 22,
          },
          {
            name: 'Tyreek Hill',
            position: 'WR',
            salary: 39,
          },
          {
            name: 'AJ Brown',
            position: 'WR',
            salary: 47,
          },
          {
            isKeeper: true,
            name: 'TJ Hockenson',
            position: 'TE',
            salary: 6,
          },
          {
            name: 'DJ Moore',
            position: 'FLEX',
            salary: 31,
          },
          {
            name: 'Kyler Murray',
            position: 'OP',
            salary: 30,
          },
          {
            name: 'Bills',
            position: 'D/ST',
            salary: 0,
          },
          {
            name: 'Tyler Bass',
            position: 'K',
            salary: 0,
          },
          {
            name: 'Cam Ward',
            position: 'B',
            salary: 7,
          },
          {
            name: 'Tyrone Tracy',
            position: 'B',
            salary: 6,
          },
          {
            name: 'Jaylen Warren',
            position: 'B',
            salary: 3,
          },
          {
            name: 'Jayden Reed',
            position: 'B',
            salary: 3,
          },
          {
            name: 'Marvin Mims',
            position: 'B',
            salary: 0,
          },
          {
            name: 'Travis Etienne',
            position: 'B',
            salary: 1,
          },
          {
            name: 'Elijah Arroyo',
            position: 'B',
            salary: 0,
          },
        ],
        salaryCap: 300,
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
            salary: 18,
          },
          {
            name: 'Chase Brown',
            position: 'RB',
            salary: 45,
          },
          {
            name: 'Isaiah Pacheco',
            position: 'RB',
            salary: 20,
          },
          {
            name: 'Rome Odunze',
            position: 'WR',
            salary: 11,
          },
          {
            name: 'Courtland Sutton',
            position: 'WR',
            salary: 32,
          },
          {
            name: 'Sam LaPorta',
            position: 'TE',
            salary: 29,
          },
          {
            name: 'Ladd McConkey',
            position: 'FLEX',
            salary: 43,
          },
          {
            name: 'Bo Nix',
            position: 'OP',
            salary: 50,
          },
          {
            name: 'Vikings',
            position: 'D/ST',
            salary: 0,
          },
          {
            name: "Ka'imi Fairbairn",
            position: 'K',
            salary: 0,
          },
          {
            name: 'David Montgomery',
            position: 'B',
            salary: 15,
          },
          {
            name: 'Tetairoa McMillan',
            position: 'B',
            salary: 24,
          },
          {
            name: 'Zach Charbonnet',
            position: 'B',
            salary: 2,
          },
          {
            name: 'Jauan Jennings',
            position: 'B',
            salary: 1,
          },
          {
            name: 'Cam Skattebo',
            position: 'B',
            salary: 1,
          },
          {
            name: 'Ollie Gordon',
            position: 'B',
            salary: 3,
          },
          {
            name: 'Dylan Sampson',
            position: 'B',
            salary: 0,
          },
        ],
        salaryCap: 300,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
