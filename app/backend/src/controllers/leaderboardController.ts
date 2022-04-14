import { Request, Response } from 'express';
import leaderboardService from '../services/leaderboardService';

const findAllHome = async (_req: Request, res: Response) => {
  const response = await leaderboardService.findAllHome();
  return res.status(200).json(response);
};

const findAllAway = async (_req: Request, res: Response) => {
  const response = await leaderboardService.findAllAway();
  return res.status(200).json(response);
};

const filterTeam = async (_req: Request, res: Response) => {
  const response = await leaderboardService.filterTeam();
  return res.status(200).json(response);
};

export default { findAllHome, findAllAway, filterTeam };
