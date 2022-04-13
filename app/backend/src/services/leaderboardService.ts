import Matchs from '../database/models/Matchs';
import Clubs from '../database/models/Clubs';
import { LeaderboardI, LeaderboardW, SetData } from '../interfaces/Leaderboard';
import getData from '../middlewares/getData';
import orderByPoints from '../middlewares/orderResult';

// para mudar os nomes dos attributes li na documentação
// https://github.com/sequelize/sequelize/issues/1556

const otherData = (dataClub: SetData) => {
  const { clubName, totalPoints, totalVictories,
    totalDraws, totalLosses, goalsFavor, goalsOwn } = dataClub;
  const totalGames = totalVictories + totalDraws + totalLosses;
  const goalsBalance = goalsFavor - goalsOwn;
  const efficiency = +((totalPoints / ((totalGames * 3))) * 100).toFixed(2);

  return {
    name: clubName,
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

const findAllHome = async () => {
  const clubs = await Clubs.findAll({
    include: {
      model: Matchs,
      as: 'homeClub',
      where: { inProgress: false },
      attributes: [
        ['home_team_goals', 'goalsFavor'],
        ['away_team_goals', 'goalsOwn'],
      ],
    },
  }) as unknown as LeaderboardI[];
  const mapClubs = clubs.map((club) => {
    const data = getData.getData(club.homeClub, club.clubName);
    return data;
  });

  const allStats = mapClubs.map((value) => otherData(value));

  return allStats.sort(orderByPoints);
};

const findAllAway = async () => {
  const clubs = await Clubs.findAll({
    include: {
      model: Matchs,
      as: 'awayClub',
      where: { inProgress: false },
      attributes: [
        ['home_team_goals', 'goalsOwn'],
        ['away_team_goals', 'goalsFavor'],
        ['away_team', 'awayTeamId'],
      ],
    },
  }) as unknown as LeaderboardW[];

  // console.log(clubs);

  const mapClubs = clubs.map((club) => {
    const data = getData.getData(club.awayClub, club.clubName);
    return data;
  });

  const allStats = mapClubs.map((value) => otherData(value));

  return allStats.sort(orderByPoints);
};

export default { findAllHome, findAllAway };
