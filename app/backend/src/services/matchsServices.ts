import Matchs from '../database/models/Matchs';
import Clubs from '../database/models/Clubs';

const findAll = async () => {
  const allMatchs = await Matchs.findAll({
    include: [
      { model: Clubs, as: 'homeClub', attributes: ['clubName'] },
      { model: Clubs, as: 'awayClub', attributes: ['clubName'] },
    ],
  });
  return allMatchs;
};

export default { findAll };
