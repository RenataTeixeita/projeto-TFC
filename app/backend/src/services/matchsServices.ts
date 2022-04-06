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

// const findInProgress = async (inProgress: string) => {
//   if (inProgress === 'false') {
//     const fineshed = await Matchs.findOne({
//       where: { inProgress },
//       include: [
//         { model: Clubs, as: 'homeClub', attributes: ['clubName'] },
//         { model: Clubs, as: 'awayClub', attributes: ['clubName'] },
//       ],
//     });
//     return fineshed;
//   }
//   return 'Nenhuma partida finalizada até o momento.';
// };

export default { findAll, saveMatch };
