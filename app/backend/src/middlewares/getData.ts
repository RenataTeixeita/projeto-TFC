import { MatchsI, SetData, TeamI, HalfClubI } from '../interfaces/Leaderboard';
import orderByPoints from './orderResult';

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

const halfStats = (clubInfo: HalfClubI) => {
  const { name, totalPoints, totalVictories, totalDraws,
    totalLosses, totalGames, goalsFavor, goalsOwn } = clubInfo;
  const goalsBalance = goalsFavor - goalsOwn;
  const efficiency = +((totalPoints / ((totalGames * 3))) * 100).toFixed(2);

  return {
    name,
    totalPoints,
    totalGames,
    totalVictories,
    totalDraws,
    totalLosses,
    goalsFavor,
    goalsOwn,
    goalsBalance,
    efficiency,
  };
};

const allStats = (allHome: TeamI, allAway: TeamI) => {
  const { name } = allHome;
  const totalPoints = allHome.totalPoints + allAway.totalPoints;
  const totalVictories = allHome.totalVictories + allAway.totalVictories;
  const totalDraws = allHome.totalDraws + allAway.totalDraws;
  const totalLosses = allHome.totalLosses + allAway.totalLosses;
  const totalGames = allHome.totalGames + allAway.totalGames;
  const goalsFavor = allHome.goalsFavor + allAway.goalsFavor;
  const goalsOwn = allHome.goalsOwn + allAway.goalsOwn;

  return {
    name, totalPoints, totalVictories, totalDraws, totalLosses, totalGames, goalsFavor, goalsOwn,
  };
};

const resultStats = (allHome: TeamI, allAway: TeamI) => {
  const firstStep = allStats(allHome, allAway);
  const secondStep = halfStats(firstStep);
  return secondStep;
};
const mapperList = (allHome: TeamI[], allAway: TeamI[]) => {
  let bigger = allHome;
  let smaller = allAway;

  if (allHome.length < allAway.length) {
    bigger = allAway;
    smaller = allHome;
  }
  const newList = bigger.map((club) => {
    const searchClub = smaller.find((infoClub) => club.name === infoClub.name);
    if (!searchClub) return 'false';
    const updateClub = resultStats(club, searchClub);
    return updateClub;
  }) as TeamI[];
  return newList.sort(orderByPoints);
};

export default { getData, mapperList };
