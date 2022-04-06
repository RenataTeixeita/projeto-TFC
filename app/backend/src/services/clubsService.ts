import Clubs from '../database/models/Clubs';

const findAll = async () => {
  const allClubs = await Clubs.findAll();
  return allClubs;
};

const findById = async (id: number) => {
  const findClub = await Clubs.findByPk(id);
  return findClub;
};

export default { findAll, findById };
