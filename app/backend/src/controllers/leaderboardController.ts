import { Request, Response } from 'express';
import leaderboardService from '../services/leaderboardService';

const findAllHome = async (_req: Request, res: Response) => {
  const response = await leaderboardService.findAllHome();
  return res.status(200).json(response);
};

export default { findAllHome };
