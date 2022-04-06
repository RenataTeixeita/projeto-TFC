import { Request, Response } from 'express';
import clubsService from '../services/clubsService';

const findAll = async (_req: Request, res: Response) => {
  const allClubs = await clubsService.findAll();
  return res.status(200).json(allClubs);
};

export default { findAll };
