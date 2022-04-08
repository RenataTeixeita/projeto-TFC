import { Request, Response, NextFunction } from 'express';

const validMatch = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;
  if (!homeTeam || !awayTeam) {
    return next(res.status(401).json({ message: 'There is no team with such id!' }));
  }
  if (homeTeam === awayTeam) {
    return next(res.status(401)
      .json({ message: 'It is not possible to create a match with two equal teams' }));
  }
  next();
};

export default validMatch;
