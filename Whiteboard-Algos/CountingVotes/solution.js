function countVotes (votes) {
  let poll = {};
  let winner = '';
  let highest = 0;

  votes.forEach((person) => {
    if (!poll[person]) {
      poll[person] = 1;
    } else {
      poll[person]++;
    }
  })

  Object.keys(poll).sort().forEach(candidate => {
    if (poll[candidate] >= highest) {
      highest = poll[candidate];
      winner = candidate;
    }
  })
  return winner;
}

const votes = ['veronica', 'mary', 'alex', 'james', 'mary', 'michael', 'alex', 'michael'];

console.log(countVotes(votes)); // should return 'michael'