<template>
  <h3>Scoring</h3>
  <h4>Matchups</h4>
  <span>Matchups are based on a Head to Head Points system</span>
  <h4>Passing</h4>
  <table>
    <tbody>
      <tr>
        <td>Per Yard</td>
        <td>0.04</td>
      </tr>
      <tr>
        <td>TD</td>
        <td>6</td>
      </tr>
      <tr>
        <td>40+ yard TD pass bonus</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Interception Thrown</td>
        <td>-2</td>
      </tr>
      <tr>
        <td>2pt Passing Conversion</td>
        <td>2</td>
      </tr>
      <tr>
        <td>300-399 yard passing game</td>
        <td>2</td>
      </tr>
      <tr>
        <td>400+ yard passing game</td>
        <td>4</td>
      </tr>
    </tbody>
  </table>
  <h4>Rushing</h4>
  <table>
    <tbody>
      <tr>
        <td>Per Yard</td>
        <td>0.1</td>
      </tr>
      <tr>
        <td>TD</td>
        <td>6</td>
      </tr>
      <tr>
        <td>40+ yard TD rush bonus</td>
        <td>1</td>
      </tr>
      <tr>
        <td>2pt Rushing Conversion</td>
        <td>2</td>
      </tr>
      <tr>
        <td>100-199 yard rushing game</td>
        <td>2</td>
      </tr>
      <tr>
        <td>200+ yard rushing game</td>
        <td>4</td>
      </tr>
    </tbody>
  </table>
  <h4>Receiving</h4>
  <table>
    <tbody>
      <tr>
        <td>Per Yard</td>
        <td>0.1</td>
      </tr>
      <tr>
        <td>Each reception</td>
        <td>1</td>
      </tr>
      <tr>
        <td>TD</td>
        <td>6</td>
      </tr>
      <tr>
        <td>40+ yard TD rec bonus</td>
        <td>1</td>
      </tr>
      <tr>
        <td>2pt Receiving Conversion</td>
        <td>2</td>
      </tr>
      <tr>
        <td>100-199 yard receiving game</td>
        <td>2</td>
      </tr>
      <tr>
        <td>200+ yard receiving game</td>
        <td>4</td>
      </tr>
    </tbody>
  </table>
  <h4>Miscellaneous</h4>
  <table>
    <tbody>
      <tr>
        <td>Kickoff Return TD</td>
        <td>6</td>
      </tr>
      <tr>
        <td>Punt Return TD</td>
        <td>6</td>
      </tr>
      <tr>
        <td>Fumble Recovered for TD</td>
        <td>6</td>
      </tr>
      <tr>
        <td>Total Fumbles Lost</td>
        <td>-2</td>
      </tr>
      <tr>
        <td>Interception Return TD</td>
        <td>6</td>
      </tr>
      <tr>
        <td>Fumble Return TD</td>
        <td>6</td>
      </tr>
      <tr>
        <td>Blocked Punt or FG return for TD</td>
        <td>6</td>
      </tr>
      <tr>
        <td>2pt Return</td>
        <td>2</td>
      </tr>
      <tr>
        <td>1pt Safety</td>
        <td>1</td>
      </tr>
    </tbody>
  </table>
  <h4>Kicking</h4>
  <table>
    <tbody>
      <tr>
        <td>Each PAT Made</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Total FG Missed</td>
        <td>-1</td>
      </tr>
      <tr>
        <td>FG Made 0-39 yards</td>
        <td>3</td>
      </tr>
      <tr>
        <td>FG Made 40-49 yards</td>
        <td>4</td>
      </tr>
      <tr>
        <td>FG Made 50-59 yards</td>
        <td>5</td>
      </tr>
      <tr>
        <td>FG Made 60+ yards</td>
        <td>6</td>
      </tr>
    </tbody>
  </table>
  <h4>Team Defense / Special Teams</h4>
  <table>
    <tbody>
      <tr>
        <td>Each Sack</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Interception Return TD</td>
        <td>6</td>
      </tr>
      <tr>
        <td>Fumble Return TD</td>
        <td>6</td>
      </tr>
      <tr>
        <td>Kickoff Return TD</td>
        <td>6</td>
      </tr>
      <tr>
        <td>Punt Return TD</td>
        <td>6</td>
      </tr>
      <tr>
        <td>Blocked Punt or FG return for TD</td>
        <td>6</td>
      </tr>
      <tr>
        <td>Blocked Punt, PAT, or FG</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Each Interception</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Each Fumble Recovered</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Each Safety</td>
        <td>2</td>
      </tr>
      <tr>
        <td>0 points allowed</td>
        <td>5</td>
      </tr>
      <tr>
        <td>1-6 points allowed</td>
        <td>4</td>
      </tr>
      <tr>
        <td>7-13 points allowed</td>
        <td>3</td>
      </tr>
      <tr>
        <td>14-17 points allowed</td>
        <td>1</td>
      </tr>
      <tr>
        <td>18-27 points allowed</td>
        <td>0</td>
      </tr>
      <tr>
        <td>28-34 points allowed</td>
        <td>-1</td>
      </tr>
      <tr>
        <td>35-45 points allowed</td>
        <td>-3</td>
      </tr>
      <tr>
        <td>46+ points allowed</td>
        <td>-5</td>
      </tr>
      <tr>
        <td>Less than 100 total yards allowed</td>
        <td>5</td>
      </tr>
      <tr>
        <td>100-199 total yards allowed</td>
        <td>3</td>
      </tr>
      <tr>
        <td>200-299 total yards allowed</td>
        <td>2</td>
      </tr>
      <tr>
        <td>300-349 total yards allowed</td>
        <td>0</td>
      </tr>
      <tr>
        <td>350-399 total yards allowed</td>
        <td>-1</td>
      </tr>
      <tr>
        <td>400-449 total yards allowed</td>
        <td>-3</td>
      </tr>
      <tr>
        <td>450-499 total yards allowed</td>
        <td>-5</td>
      </tr>
      <tr>
        <td>500-549 total yards allowed</td>
        <td>-6</td>
      </tr>
      <tr>
        <td>550+ total yards allowed</td>
        <td>-7</td>
      </tr>
      <tr>
        <td>2pt Return</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Safety</td>
        <td>1</td>
      </tr>
    </tbody>
  </table>
</template>
