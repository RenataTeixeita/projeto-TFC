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
  homeTeamGoals: 0,
  awayTeamGoals: 0,
};

// Tive a ideia do reduce e o Roberval me ajudou a estruturar a função

const getData = (matchs: MatchsI[], clubName: string) => {
  const matchsMap = matchs.reduce((acc, curr) => {
    const { dataValues: { homeTeamGoals, awayTeamGoals } } = curr;
    const testing = test(homeTeamGoals, awayTeamGoals);
    const { totalPoints, totalVictories, totalDraws, totalLosses } = testing;
    return {
      clubName,
      totalPoints: acc.totalPoints + totalPoints,
      totalVictories: acc.totalVictories + totalVictories,
      totalDraws: acc.totalDraws + totalDraws,
      totalLosses: acc.totalLosses + totalLosses,
      homeTeamGoals: acc.homeTeamGoals + homeTeamGoals,
      awayTeamGoals: acc.awayTeamGoals + awayTeamGoals,
    };
  }, obj as SetData);
  return matchsMap;
};

export default { getData };
