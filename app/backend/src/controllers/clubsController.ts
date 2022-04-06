import { Request, Response } from 'express';
import clubsService from '../services/clubsService';

const findAll = async (_req: Request, res: Response) => {
  const allClubs = await clubsService.findAll();
  return res.status(200).json(allClubs);
};

const findById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const findClub = await clubsService.findById(Number(id));
  return res.status(200).json(findClub);
};

export default { findAll, findById };
