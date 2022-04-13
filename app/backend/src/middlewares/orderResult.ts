import { TeamI } from '../interfaces/Leaderboard';

const sortTeams = (teamA: TeamI, teamB: TeamI) => {
  if (teamA.totalVictories !== teamB.totalVictories) {
    if (teamA.totalVictories > teamB.totalVictories) return -1;
    return 1;
  }
  if (teamA.goalsBalance !== teamB.goalsBalance) {
    if (teamA.goalsBalance > teamB.goalsBalance) return -1;
    return 1;
  }
  if (teamA.goalsFavor !== teamB.goalsFavor) {
    if (teamA.goalsFavor > teamB.goalsFavor) return -1;
    return 1;
  }
  if (teamA.goalsOwn > teamB.goalsOwn) return -1;
  return 1;
};

// A Juliana me ajudou nessa parte

const orderByPoints = (teamA: TeamI, teamB: TeamI) => {
  if (teamA.totalPoints !== teamB.totalPoints) {
    if (teamA.totalPoints > teamB.totalPoints) return -1;
    return 1;
  }
  const newList = sortTeams(teamA, teamB);
  return newList;
};

export default orderByPoints;
