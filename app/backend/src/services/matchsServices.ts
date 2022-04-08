import Matchs from '../database/models/Matchs';
import Clubs from '../database/models/Clubs';
import { InputMatch, OutputMatch } from '../interfaces/MatchsInterface';

const findAll = async () => {
  const allMatchs = await Matchs.findAll({
    include: [
      { model: Clubs, as: 'homeClub', attributes: ['clubName'] },
      { model: Clubs, as: 'awayClub', attributes: ['clubName'] },
    ],
  });
  return allMatchs;
};

const saveMatch = async (body: InputMatch): Promise<OutputMatch> => {
  const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress } = body;
  const newMatch = await Matchs.create(
    { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress },
  );
  return newMatch;
};

const finished = async (id: number) => {
  await Matchs.update(
    { inProgress: false },
    { where: { id } },
  );
  const findMatch = await Matchs.findByPk(id);
  return findMatch;
};

const upDateGoals = async (homeTeamGoals: string, awayTeamGoals: string, id: number) => {
  // const statusGoals =
  await Matchs.update(
    {
      homeTeamGoals,
      awayTeamGoals,
    },
    { where: { id } },
  );
  const statusGoals = await Matchs.findByPk(id);
  return statusGoals;
};

export default { findAll, saveMatch, finished, upDateGoals };
