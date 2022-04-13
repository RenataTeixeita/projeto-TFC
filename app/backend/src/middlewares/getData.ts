import { MatchsI, SetData } from '../interfaces/Leaderboard';

const test = (homeTeamGoals: number, awayTeamGoals: number) => {
  let totalPoints = 0;
  let totalVictories = 0;
  let totalDraws = 0;
  let totalLosses = 0;

  if (homeTeamGoals === awayTeamGoals) {
    totalPoints += 1;
    totalDraws += 1;
  } else if (homeTeamGoals > awayTeamGoals) {
    totalPoints += 3;
    totalVictories += 1;
  } else if (homeTeamGoals < awayTeamGoals) {
    totalLosses += 1;
  }

  return { totalPoints, totalVictories, totalDraws, totalLosses };
};

const obj = {
  totalPoints: 0,
  totalVictories: 0,
  totalDraws: 0,
  totalLosses: 0,
  goalsFavor: 0,
  goalsOwn: 0,
};

// Tive a ideia do reduce e o Roberval me ajudou a estruturar a função

const getData = (matchs: MatchsI[], clubName: string) => {
  const matchsMap = matchs.reduce((acc, curr) => {
    const { dataValues: { goalsFavor, goalsOwn } } = curr;
    const testing = test(goalsFavor, goalsOwn);
    const { totalPoints, totalVictories, totalDraws, totalLosses } = testing;

    return {
      clubName,
      totalPoints: acc.totalPoints + totalPoints,
      totalVictories: acc.totalVictories + totalVictories,
      totalDraws: acc.totalDraws + totalDraws,
      totalLosses: acc.totalLosses + totalLosses,
      goalsFavor: acc.goalsFavor + goalsFavor,
      goalsOwn: acc.goalsOwn + goalsOwn,
    };
  }, obj as SetData);

  return matchsMap;
};

export default { getData };
