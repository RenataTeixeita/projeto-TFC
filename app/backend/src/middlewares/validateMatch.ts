import { Request, Response, NextFunction } from 'express';
import Clubs from '../database/models/Clubs';

const validMatch = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;
  const isteam1 = await Clubs.findByPk(Number(homeTeam));
  const isteam2 = await Clubs.findByPk(Number(awayTeam));
  if (isteam1 === null || isteam2 === null) {
    return next(res.status(401).json({ message: 'There is no team with such id!' }));
  }
  if (homeTeam === awayTeam) {
    return next(res.status(401)
      .json({ message: 'It is not possible to create a match with two equal teams' }));
  }
  next();
};

export default validMatch;
