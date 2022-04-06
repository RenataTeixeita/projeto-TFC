import Clubs from '../database/models/Clubs';

const findAll = async () => {
  const allClubs = await Clubs.findAll();
  return allClubs;
};

export default { findAll };
